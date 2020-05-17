const DataReader = require('./DataReader');
const fs = require('fs');
const { PNG } = require('pngjs');

async function extractFromFile(src, dst) {
	const reader = new DataReader(src);
	const width = await reader.readInt32();
	const height = await reader.readInt32();
	const hasAlpha = !!(await reader.readUInt8());
	const totalSize = width * height * 4;

	async function argb(a, r, g, b) {
		r = r != null ? r : await reader.readUInt8();
		g = g != null ? g : await reader.readUInt8();
		b = b != null ? b : await reader.readUInt8();
		return [ b, g, r, a ];
	}

	const png = new PNG({ width, height });
	let i = 0;
	while (i < totalSize) {
		const repeat = await reader.readUInt8();
		let bytes;

		if (hasAlpha) {
			const alpha = await reader.readUInt8();
			if (alpha > 0) {
				bytes = await argb(alpha);
			} else {
				bytes = [ 0, 0, 0, 0 ];
			}
		} else {
			bytes = await argb(0xFF);
		}

		for (let j = 0; j < repeat; j++) {
			png.data.writeUInt8(bytes[0], i++);
			png.data.writeUInt8(bytes[1], i++);
			png.data.writeUInt8(bytes[2], i++);
			png.data.writeUInt8(bytes[3], i++);
		}
	}

	return new Promise((resolve, reject) => {
		png
			.pack()
			.pipe(fs.createWriteStream(dst))
			.on('finish', resolve)
			.on('error', reject);
	});
}

(async function() {
	const src = process.argv[2];
	const dst = process.argv[3];
	await extractFromFile(src, dst);
})();