const fs = require('fs').promises;
const log = require('./log')('Map');

const decodeTypes = [
	'Bool',
	'UInt8',
	'UInt16LE',
	'Int32LE',
	'FloatLE'
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
			element[key] = value;
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

	static async load(mapFile) {
		const map = new Map();
		await map.load(mapFile);
		return map;
	}
}

module.exports = Map;