const debug = require('debug')('MapReader');
const fs = require('fs');

class MapReader {
	constructor(map) {
		this.map = map;
	}

	async readMap() {
		const { map } = this;
		const stream = this.stream = fs.createReadStream(this.map.file);

		return new Promise((resolve, reject) => {
			stream.on('readable', () => {
				// read package data and attach to map
				map.header = this.readHeader();
				map.package = this.readString();

				// read lookup values and attach to map
				const lookupLength = this.readUInt16();
				map.lookup = [];
				for (let i = 0; i < lookupLength; i++) {
					const val = this.readString();
					debug('lookup:', val);
					map.lookup.push(val);
				}

				// decode all elements and attach to map
				const data = this.decodeElement();
				data._package = this.map.package;
				map.data = data;
				stream.close();
			});

			stream.on('close', resolve);

			stream.on('error', reject);
		});
	}

	// basic stream reading functions
	readUInt8() { return this.stream.read(1).readUInt8(); }
	readUInt16() { return this.stream.read(2).readUInt16LE(); }
	readInt16() { return this.stream.read(2).readInt16LE(); }
	readInt32() { return this.stream.read(4).readInt32LE(); }
	readFloat() { return this.stream.read(4).readFloatLE(); }
	readString() {
		const len = this.readVarLength();
		const string = len ? this.stream.read(len).toString() : '';
		return string;
	}

	// Celeste-specific stream reading functions
	readVarLength() {
		let len = 0;
		let count = 0;
		let byte;

		do {
			byte = this.readUInt8();
			len += (byte & 127) << (count++ * 7);
		} while ((byte >> 7) !== 0);

		return len;
	}

	readHeader() {
		const header = this.readString();
		if (header !== 'CELESTE MAP') {
			const msg = `invalid header "${header}" for map file "${this.map.file}"`;
			debug(msg);
			throw new Error(msg);
		}
		return header;
	}

	look() {
		return this.map.lookup[this.readUInt16()];
	}

	readRunLengthEncoded() {
		const byteCount = this.readUInt16();
		const data = [];
		let string = '';

		for (let i = 0; i < byteCount; i++) {
			data.push(this.readUInt8());
		}

		for (let i = 0; i < data.length; i = i + 2) {
			const times = data[i];
			const char = data[i + 1];
			string += String.fromCharCode(char) ^ times;
		}

		return string;
	}

	decodeValue(type) {
		if (type === 0) {
			return !!this.readUInt8();
		} else if (type === 1) {
			return this.readUInt8();
		} else if (type === 2) {
			return this.readUInt16();
		} else if (type === 3) {
			return this.readInt32();
		} else if (type === 4) {
			return this.readFloat();
		} else if (type === 5) {
			return this.look();
		} else if (type === 6) {
			return this.readString();
		} else if (type === 7) {
			return this.readRunLengthEncoded();
		}
	}

	decodeElement() {
		const name = this.look();
		const attrCount = this.readUInt8();
		const element = { __name: name };
		// debug(`[${name}] attr count`, attrCount);

		for (let i = 0; i < attrCount; i++) {
			const key = this.look();
			const type = this.readUInt8();
			const value = this.decodeValue(type);
			// debug(`[${name}.${key}] = ${value}`);
			element[key] = { value, type };
		}

		const elementCount = this.readUInt16();
		if (elementCount > 0) {
			element.__children = [];
			for (let i = 0; i < elementCount; i++) {
				element.__children.push(this.decodeElement());
			}
		}

		debug(element);
		return element;
	}

}

module.exports = MapReader;