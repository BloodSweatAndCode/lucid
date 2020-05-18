const fs = require('fs');

class BinaryReader {
	constructor(file) {
		this.stream = fs.createReadStream(file);
	}

	async readable() {
		return new Promise(r => {
			this.stream.removeAllListeners('readable');
			this.stream.on('readable', r);
		});
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

	close() {
		this.stream.close();
	}
}

module.exports = BinaryReader;