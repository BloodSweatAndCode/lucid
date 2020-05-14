const fs = require('fs');

class MapReader {
	constructor(map, file) {
		this.map = map;
		this.file = file;
	}

	async readMap() {
		const { map } = this;
		const stream = this.stream = fs.createReadStream(this.file);
		let data = null;

		// read package data
		await this.readHeader({ validate: true });
		map.package = await this.readString();

		// read lookup values and attach to map
		const lookupLength = await this.readUInt16();
		const lookup = [];
		for (let i = 0; i < lookupLength; i++) {
			lookup.push(await this.readString());
		}

		// decode all elements and attach to map
		data = await this.decodeElement(lookup);
		data._package = this.map.package;
		stream.close();

		return data;
	}

	// basic stream reading functions
	async readable() {
		return new Promise(r => this.stream.on('readable', r));
	}

	async readBytes(len) {
		const buf = this.stream.read(len);
		if (buf) {
			return new Promise(r => r(buf));
		} else {
			return new Promise(r => {
				this.readable().then(() => {
					this.readBytes(len).then(b => r(b));
				});
			});
		}
	}

	async readUInt8() { return (await this.readBytes(1)).readUInt8(); }
	async readUInt16() { return (await this.readBytes(2)).readUInt16LE(); }
	async readInt16() { return (await this.readBytes(2)).readInt16LE(); }
	async readInt32() { return (await this.readBytes(4)).readInt32LE(); }
	async readFloat() { return (await this.readBytes(4)).readFloatLE(); }
	async readString() {
		const len = await this.readVarLength();
		const string = len ? (await this.readBytes(len)).toString() : '';
		return string;
	}

	// Celeste-specific stream reading functions
	async readVarLength() {
		let len = 0;
		let count = 0;
		let byte;

		do {
			byte = await this.readUInt8();
			len += (byte & 127) << (count++ * 7);
		} while ((byte >> 7) !== 0);

		return len;
	}

	async readHeader(opts = {}) {
		const header = await this.readString();
		if (opts.validate && header !== 'CELESTE MAP') {
			throw new Error(`invalid header "${header}" for map file "${this.file}"`);
		}
		return header;
	}

	async look(lookup) {
		return lookup[await this.readUInt16()];
	}

	async readRunLengthEncoded() {
		const byteCount = await this.readUInt16();
		const data = [];
		let string = '';

		for (let i = 0; i < byteCount; i++) {
			data.push(await this.readUInt8());
		}

		for (let i = 0; i < data.length; i = i + 2) {
			const times = data[i];
			const char = data[i + 1];
			string += String.fromCharCode(char).repeat(times);
		}

		return string;
	}

	async decodeValue(type, lookup) {
		if (type === 0) {
			return !!(await this.readUInt8());
		} else if (type === 1) {
			return await this.readUInt8();
		} else if (type === 2) {
			return await this.readUInt16();
		} else if (type === 3) {
			return await this.readInt32();
		} else if (type === 4) {
			return await this.readFloat();
		} else if (type === 5) {
			return await this.look(lookup);
		} else if (type === 6) {
			return await this.readString();
		} else if (type === 7) {
			return await this.readRunLengthEncoded();
		}
	}

	async decodeElement(lookup) {
		const name = await this.look(lookup);
		const attrCount = await this.readUInt8();
		const element = { __name: name };

		for (let i = 0; i < attrCount; i++) {
			const key = await this.look(lookup);
			const type = await this.readUInt8();
			const value = await this.decodeValue(type, lookup);
			element[key] = value;
		}

		const elementCount = await this.readUInt16();
		if (elementCount > 0) {
			element.__children = [];
			for (let i = 0; i < elementCount; i++) {
				element.__children.push(await this.decodeElement(lookup));
			}
		}

		return element;
	}

}

module.exports = MapReader;