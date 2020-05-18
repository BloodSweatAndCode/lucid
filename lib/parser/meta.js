const BinaryReader = require('../BinaryReader');

exports.decode = async function(src, opts = {}) {
	// loading sprite metadata
	const pngFile = opts.pngFile || src.replace(/\.meta$/, '.png');
	const r = new BinaryReader(src);
	const metadata = {};

	// read off header data
	await r.readInt32();
	await r.readString();
	await r.readInt32();

	const count = await r.readInt16();
	for (let i = 0; i < count; i++) {
		await r.readString();
		const sprites = await r.readInt16();

		// get metadata for each sprite
		for (let j = 0; j < sprites; j++) {
			const filepath = (await r.readString()).replace(/\\/g, '/');
			const sprite = {
				x: await r.readInt16(),
				y: await r.readInt16(),
				width: await r.readInt16(),
				height: await r.readInt16(),
				offestX: await r.readInt16(),
				offsetY: await r.readInt16(),
				realWidth: await r.readInt16(),
				realHeight: await r.readInt16(),
				surface: null, // TODO: figure out this surface
				filename: pngFile
			};

			const time = process.hrtime();
			metadata[filepath] = {
				sprite,
				readtime: time[0] * 1e9 + time[1],
				path: pngFile
			};
		}

		r.close();

		return metadata;
	}
};