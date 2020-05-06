const fs = require('fs');

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

	async writeMap(dstFile) {
		const { map: { lookup, data } } = this;
		const seen = {};

		this.populateEncodeKeyNames(data, seen);

		const seenLookup = Object.keys(seen);
		const lookupDict = seenLookup.reduce((a,c,i) => {
			a[c] = i;
			return a;
		}, {});
		const stream = this.stream = fs.createWriteStream(dstFile);

		this.writeString('CELESTE_MAP');
		this.writeString(data._package);
		this.writeUInt16(lookup.length);

		console.log(data);

		lookup.forEach(l => this.writeString(l));
		this.encodeElement(data, lookupDict);
		// data.forEach(el => this.encodeElement(el, lookupDict));

		stream.end();
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

	getAttributeNames(element) {
		const attr = {};
		for (let [ key, value ] of Object.entries(element)) {
			if (key.indexOf('_') !== 0 && value != null) {
				attr[key] = value;
			}
		}
		return attr;
	}

	encodeValue(attr, value, type, lookup) {
		const { stream } = this;

		if (type === 3) {
			for (let index = 0; index < numRanges.length; index++) {
				const { type, range: [ min, max] } = numRanges[index];
				if (value >= min && value <= max) {
					this.writeUInt8(index + 1);
					this[`write${type}`](value);
					break;
				}
			}
		} else if (type === 4) {
			this.writeUInt8(4);
			this.writeFloat(value);
		} else if (typeof value === 'boolean') {
			this.writeUInt8(0);
			this.writeUInt8(value ? 1 : 0);
		} else if (typeof value === 'string') {
			const index = lookup[value] || 0;
			if (index < 0) {
				const encodedValue = this.encodeRunLength(value);
				const encodedLength = encodedValue.length;

				if (encodedLength < value.length && encodedLength <= numRanges.Int16LE.range[1]) {
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
			for (let el in element) {
				this.encodeElement(el, lookup);
			}
		} else {
			const attrs = this.getAttributeNames(element);
			const children = element.__children || [];

			this.writeUInt16(lookup.__name || 0);
			this.writeUInt8(Object.keys(attrs).length);

			for (let [ key, { value, type} ] of Object.entries(attrs)) {
				this.writeUInt16(lookup[key] || 0);
				this.encodeValue(key, value, type, lookup);
			}

			this.writeUInt16(children.length);
			this.encodeElement(children, lookup);
		}
	}
}

module.exports = MapWriter;