const fs = require('fs');
const { isFloat, isNumber } = require('../utils');

const numRanges = [
	{ type: 'UInt8', range: [ 0, 255 ] },
	{ type: 'Int16', range: [ -32768, 32767 ] },
	{ type: 'Int32', range: [ -2147483648, 2147483647 ] }
];

class MapWriter {
	constructor(map) {
		this.map = map;
	}

	writeUInt8(val) {
		const buf = Buffer.allocUnsafe(1);
		buf.writeUInt8(val);
		this.stream.write(buf);
	}

	writeInt16(val) {
		const buf = Buffer.allocUnsafe(2);
		buf.writeInt16LE(val);
		this.stream.write(buf);
	}

	writeUInt16(val) {
		const buf = Buffer.allocUnsafe(2);
		buf.writeUInt16LE(val);
		this.stream.write(buf);
	}

	writeInt32(val) {
		const buf = Buffer.allocUnsafe(4);
		buf.writeInt32LE(val);
		this.stream.write(buf);
	}

	writeFloat(val) {
		const buf = Buffer.allocUnsafe(4);
		buf.writeFloatLE(val);
		this.stream.write(buf);
	}

	writeVarLength(len) {
		const bytes = [];
		while (len > 127) {
			bytes.push(len & 127 | 0b10000000);
			len = Math.floor(len / 128);
		}
		bytes.push(len);
		this.stream.write(Buffer.from(bytes));
	}

	writeString(string) {
		this.writeVarLength(string.length);
		this.stream.write(Buffer.from(string, 'utf8'));
	}

	encodeRunLength(string) {
		let count = 0;
		const res = [];
		let current = string.charCodeAt(0);
		const chars = string.split('').map(c => c.charCodeAt(0));

		for (let char of chars) {
			if (char !== current || count === 255) {
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

	getAttributeNames(element) {
		const attr = {};
		for (let [ key, value ] of Object.entries(element)) {
			if (key.indexOf('_') !== 0 && value != null) {
				attr[key] = value;
			}
		}
		return attr;
	}

	encodeValue(attr, value, lookup) {
		const { stream } = this;

		if (isFloat(value)) {
			this.writeUInt8(4);
			this.writeFloat(value);
		} else if (isNumber(value)) {
			for (let index = 0; index < numRanges.length; index++) {
				const { type, range: [ min, max] } = numRanges[index];
				if (value >= min && value <= max) {
					this.writeUInt8(index + 1);
					this[`write${type}`](value);
					break;
				}
			}
		} else if (typeof value === 'boolean') {
			this.writeUInt8(0);
			this.writeUInt8(value ? 1 : 0);
		} else if (typeof value === 'string') {
			const index = lookup[value] || 0;
			if (index === 0) {
				const encodedValue = this.encodeRunLength(value);
				const encodedLength = encodedValue.length;

				if (encodedLength < value.length && encodedLength <= numRanges[1].range[1]) {
					this.writeUInt8(7);
					this.writeUInt16(encodedLength);
					stream.write(encodedValue);
				} else {
					this.writeUInt8(6);
					this.writeString(value);
				}
			} else {
				this.writeUInt8(5);
				this.writeUInt16(index);
			}
		}
	}

	encodeElement(element, lookup) {
		if (Array.isArray(element)) {
			for (let el of element) {
				this.encodeElement(el, lookup);
			}
		} else {
			const attrs = this.getAttributeNames(element);
			const children = element.__children || [];

			this.writeUInt16(lookup[element.__name] || 0);
			this.writeUInt8(Object.keys(attrs).length);

			for (let [ key, value ] of Object.entries(attrs)) {
				this.writeUInt16(lookup[key] || 0);
				this.encodeValue(key, value, lookup);
			}

			this.writeUInt16(children.length);
			this.encodeElement(children, lookup);
		}
	}

	populateEncodeKeyNames(dict, seen) {
		const name = dict.__name;
		seen[name] = (seen[name] || 0) + 1;
		const children = dict.__children || [];

		for (let [ key, value ] of Object.entries(dict)) {
			if (key.indexOf('__') !== 0) {
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

	async encode(dstFile) {
		return new Promise((resolve, reject) => {
			const dataDict = this.map.toDict();
			const seen = {};

			this.populateEncodeKeyNames(dataDict, seen);

			const lookup = Object.keys(seen);
			const lookupDict = lookup.reduce((a,c,i) => {
				a[c] = i;
				return a;
			}, {});

			// console.log('encode lookup');
			// console.log('-------------');
			// console.log(Object.keys(lookup).map((k,i) => `${i.toString(16)} = ${lookup[k]}`));

			const stream = this.stream = fs.createWriteStream(dstFile);
			this.writeString('CELESTE_MAP');
			this.writeString(dataDict._package);
			this.writeUInt16(lookup.length);

			lookup.forEach(l => this.writeString(l));
			this.encodeElement(dataDict, lookupDict);

			stream.end();
			stream.on('finish', resolve);
			stream.on('error', reject);
		});
	}
}

module.exports = MapWriter;