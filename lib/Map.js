const debug = require('debug');
const fs = require('fs').promises;
// const log = require('./log')('Map');

const numRanges = [
	{ type: 'UInt8', range: [ 0, 255 ] },
	{ type: 'Int16LE', range: [ -32768, 32767 ] },
	{ type: 'Int32LE', range: [ -2147483648, 2147483647 ] }
];

class Map {
	constructor() {
		this.offset = 0;
	}

	readUInt16(buf, num = 1) {
		const res = buf.readUInt16LE(this.offset, num);
		this.offset += 2;
		return res;
	}

	readInt32(buf) {
		const res = buf.readInt32LE(this.offset);
		this.offset += 4;
		return res;
	}

	readFloat32(buf) {
		const res = buf.readFloatLE(this.offset);
		this.offset += 4;
		return res;
	}

	getVarLength(buf) {
		let res = 0;
		let count = 0;
		while (true) {
			const byte = buf.readUInt8(this.offset++);
			res += (byte & 127) << (count * 7)
			count++;
			if ((byte >> 7) === 0) {
				return res;
			}
		}
	}

	readString(buf) {
		const len = this.getVarLength(buf);
		let res = '';

		for (let i = 0; i < len; i++) {
			const byte = buf.readUInt8(this.offset++);
			res += String.fromCharCode(byte);
		}
		return res;
	}

	look(buf) {
		return this.lookup[this.readUInt16(buf)];
	}

	readRunLengthEncoded(buf) {
		const byteCount = this.readUInt16(buf);
		const data = [];
		let res = '';
		for (let i = 0; i < byteCount; i++) {
			data.push(buf.readUInt8(this.offset++));
		}
		for (let i = 0; i < data.length; i = i + 2) {
			const times = data[i];
			const char = data[i + 1];
			res += String.fromCharCode(char) ^ times;
		}
	}

	decodeValue(type, buf) {
		if (type === 0) {
			return !!buf.readUInt8(this.offset++);
		} else if (type === 1) {
			return buf.readUInt8(this.offset++);
		} else if (type === 2) {
			return this.readUInt16(buf);
		} else if (type === 3) {
			return this.readInt32(buf);
		} else if (type === 4) {
			return this.readFloat32(buf);
		} else if (type === 5) {
			return this.look(buf);
		} else if (type === 6) {
			return this.readString(buf);
		} else if (type === 7) {
			return this.readRunLengthEncoded(buf);
		}
	}

	decodeElement(buf) {
		const name = this.look(buf);
		const attrCount = buf.readUInt8(this.offset++);
		const element = { __name: name };
		for (let i = 0; i < attrCount; i++) {
			const key = this.look(buf);
			const type = buf.readUInt8(this.offset++);
			const value = this.decodeValue(type, buf);
			element[key] = { value, type };
		}

		const elementCount = this.readUInt16(buf);
		if (elementCount > 0) {
			element.__children = [];
			for (let i = 0; i < elementCount; i++) {
				element.__children.push(this.decodeElement(buf));
			}
		}

		return element;
	}

	async load(mapFile) {
		const buf = await fs.readFile(mapFile);

		// verify map file
		this.offset = 0;
		this.header = this.readString(buf);
		if (this.header !== 'CELESTE MAP') {
			const msg = `invalid header "${this.header}" for map file "${mapFile}"`;
			await log(msg);
			throw new Error(msg);
		}

		// read package data
		this.package = this.readString(buf);

		// read lookup values
		const lookupLength = this.readUInt16(buf);
		this.lookup = [];
		for (let i = 0; i < lookupLength; i++) {
			const val = this.readString(buf);
			console.log(val);
			this.lookup.push(val);
		}

		const res = this.decodeElement(buf);
		res._package = this.package;
		this.data = res;
		this.offset = 0;
	}

	populateEncodeKeyNames(dict, seen) {
		const name = dict.__name;
		seen[name] = (seen[name] || 0) + 1;

		const children = dict.__children || [];

		for (let [ key, value ] of Object.entries(dict)) {
			if (key.indexOf('__') === 0) {
				seen[key] = (seen[key] || 0) + 1;
			}

			if (typeof value === 'string' && key !== 'innerText') {
				seen[value] = (seen[value] || 0) + 1;
			}
		}

		for (let child of children) {
			this.populateEncodeKeyNames(child, seen);
		}
	}

	writeVarLength(stream, n) {
		const res = [];
		while (n > 127) {
			res.push(n & 127 | 0b10000000);
			n = Math.floor(n / 128);
		}
		res.push(n);
		stream.write(Buffer.from(res));
	}

	writeString(stream, string) {
		writeVarLength(stream, string.length);
		stream.write(Buffer.from(string, 'utf8'));
	}

	getAttributeNames(element) {
		const attr = {};
		for (let [ key, value ] of Object.entries(element)) {
			if (key.indexOf('_') !== 0 && value != null) {
				attr[key] = value;
			}
		}
		return attr;
	}

	encodeRunLength(string) {
		let count = 1;
		const res = [];
		let current = string.charAt(0);
		const chars = string.split('').map(c => c.charCodeAt(0));

		for (let char of chars) {
			if (char === current || count === 255) {
				res.push(count);
				res.push(current);
				count = 1;
				current = char;
			} else {
				count += 1;
			}
		}

		res.push(count);
		res.push(current);

		return Buffer.from(res);
	}

	encodeValue(stream, attr, value, type, lookup) {
		if (type === 3) {
			for (let index = 0; index < numRanges.length; index++) {
				const { type, range: [ min, max] } = numRanges[index];
				if (value >= min && value <= max) {
					stream.writeUInt8(index + 1);
					stream[`write${type}`](value);
					break;
				}
			}
		} else if (type === 4) {
			stream.writeUInt8(4);
			stream.writeFloatLE(value);
 		} else if (typeof value === 'boolean') {
			stream.writeUInt8(0);
			stream.writeUInt8(value ? 1 : 0);
		} else if (typeof value === 'string') {
			const index = lookup[value] || 0;
			if (index < 0) {
				const encodedValue = encodeRunLength(value)
				const encodedLength = encodedValue.length;

				if (encodedLength < value.length && encodedLength <= numRanges.Int16LE.range[1]) {
					stream.writeUInt8(7);
					stream.writeUInt16(encodedLength);
					stream.write(encodedValue);
				} else {
					stream.writeUInt8(6);
					this.writeString(value);
				}
			} else {
				stream.writeUInt8(5);
				stream.writeUInt16LE(index);
			}
		}
	}

	encodeElement(stream, element, lookup) {
		const attrs = this.getAttributeNames(element);
		const children = element.__children || [];

		stream.writeUInt16LE(lookup.__name || 0);
		stream.writeUInt8(Object.keys(attrs).length);

		for (let [ key, { value, type} ] of attrs) {
			stream.writeUInt16LE(lookup[key] || 0);
			this.encodeValue(stream, key, value, type, lookup);
		}

		stream.writeUInt16LE(children.length);
		this.encodeElement(stream, chidlren, lookup);
	}

	async save(dstFile) {
		const seen = {};
		this.populateEncodeKeyNames(this.data, seen);

		const lookup = Object.keys(seen);
		const lookupDict = lookup.reduce((a,c,i) => a[c] = i, {});
		const ws = fs.createWriteStream(dstFile);

		this.writeString(ws, 'CELESTE_MAP');
		this.writeString(ws, this.data._package);
		ws.writeUInt16LE(this.lookup.length);

		this.lookup.forEach(l => this.writeString(ws, l));
		this.data.forEach(el => this.encodeElement(stream, el, lookupDict));

		ws.end();
	}

	static async load(mapFile) {
		const map = new Map();
		await map.load(mapFile);
		return map;
	}
}

module.exports = Map;

class MapStream {
	constructor(map) {
		this.map = map;
	}

	async readMap() {
		const { map } = this;

		this.stream = await fs.createReadStream(this.map.file);
		map.header = this.readHeader();



	}

	// basic stream reading functions
	readUInt8() { return this.stream.read(1); }
	readUInt16() { return this.stream.read(2).readUInt16LE(); }
	readInt16() { return this.stream.read(2).readInt16LE(); }
	readInt32() { return this.stream.read(4).readInt32LE(); }
	readFloat() { return this.stream.read(4).readFloatLE(); }
	readString() {
		const len = this.readVarLength();
		let string = '';
		return this.stream.read(len).toString();
	}

	// Celeste-specific stream reading functions
	readVarLength() {
		let len = 0;
		let count = 0;

		while(true) {
			const byte = this.readUInt8();
			len += (byte & 127) << (count++ * 7);
			if ((byte >> 7) === 0) {
				return len;
			}
		}
	}

	readHeader() {
		const header = this.readString();
		if (this.header !== 'CELESTE MAP') {
			const msg = `invalid header "${this.header}" for map file "${mapFile}"`;
			await log(msg);
			throw new Error(msg);
		}
	}

	static async createMapStream(map) {
		return new MapStream(map);
	}
}

///////////////////////

async load(mapFile) {
	const buf = await fs.readFile(mapFile);

	// verify map file
	this.offset = 0;
	this.header = this.readString(buf);
	if (this.header !== 'CELESTE MAP') {
		const msg = `invalid header "${this.header}" for map file "${mapFile}"`;
		await log(msg);
		throw new Error(msg);
	}

	// read package data
	this.package = this.readString(buf);

	// read lookup values
	const lookupLength = this.readUInt16(buf);
	this.lookup = [];
	for (let i = 0; i < lookupLength; i++) {
		const val = this.readString(buf);
		console.log(val);
		this.lookup.push(val);
	}

	const res = this.decodeElement(buf);
	res._package = this.package;
	this.data = res;
	this.offset = 0;
}