const fs = require('fs');

class BinaryWriter {
	constructor(file) {
		this.stream = fs.createWriteStream(file);
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

	write(val) {
		this.stream.write(val);
	}

	writeString(string) {
		this.writeVarLength(string.length);
		this.stream.write(Buffer.from(string, 'utf8'));
	}

	close() {
		this.stream.close();
	}

	end() {
		this.stream.end();
	}
}

module.exports = BinaryWriter;