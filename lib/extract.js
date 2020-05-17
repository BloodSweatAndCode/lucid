const config = require('../config/lucid-dream.json');
const DataReader = require('./dataReader');
const fs = require('fs');
const mkdirp = require('mkdirp');
const os = require('os');
const path = require('path');
const rmfr = require('rmfr');
const { PNG } = require('pngjs');
const { promisify } = require('util');

const access = promisify(fs.access);

const storage = path.join(__dirname, '..', 'output');
// const storageXml = path.join(storage, 'XML');
const storageSprites = path.join(storage, 'Sprites');

async function extractFromFile(file) {
	const reader = new DataReader(file);
	const width = await reader.readInt32();
	const height = await reader.readInt32();
	const hasAlpha = !!(await reader.readUInt8());
	const totalSize = width * height;

	async function argb(a, r, g, b) {
		r = r != null ? r : await reader.readUInt8();
		g = g != null ? g : await reader.readUInt8();
		b = b != null ? b : await reader.readUInt8();
		return [ b, g, r, a];
	}

	const png = new PNG({ width, height });
	let i = 0;
	while (i < totalSize * 4) {
		const repeat = await reader.readUInt8();
		let bytes;

		if (hasAlpha) {
			const alpha = await reader.readUInt8();
			if (alpha > 0) {
				bytes = await argb(alpha);
			} else {
				bytes = await argb(0, 0, 0, 0);
			}
		} else {
			bytes = await argb(0xFF);
		}

		for (let j = 0; j < repeat; j++) {
			// png.data.splice(i++, 4, ...bytes);
			// png.data.writeInt32LE(bytes, i * 4);
			// Buffer.from(bytes).copy(png.data, i);
			// i = i + 4;
			png.data.writeUInt8(bytes[0], i++);
			png.data.writeUInt8(bytes[1], i++);
			png.data.writeUInt8(bytes[2], i++);
			png.data.writeUInt8(bytes[3], i++);
		}
	}

	return png;
}

module.exports = async function extract() {
	const platform = os.platform();
	let searchDirs = config.celesteDir ? [ config.celesteDir ] : [];
	let celesteDir;

	if (platform === 'darwin') {
		searchDirs.push(path.join(os.homedir(), 'Library', 'Application Support', 'Steam', 'steamapps', 'common', 'Celeste', 'Celeste.app', 'Contents', 'MacOS'));
	} else if (platform === 'win32') {
		searchDirs.push(
			'C:\\Program Files (x86)\\Steam\\steamapps\\common\\Celeste',
			'C:\\Program Files\\Steam\\steamapps\\common\\Celeste'
		);
	}

	for (let dir of searchDirs) {
		try {
			await access(dir, fs.constants.F_OK);
			celesteDir = dir;
		} catch (err) {
			continue;
		}
	}

	if (!celesteDir) {
		throw new Error(`Unable to find Celeste installation directory. The following locations were searched:\n\n${searchDirs.join('\n')}`);
	}

	const graphicsDir = path.join(celesteDir, 'Content', 'Graphics');
	const atlasesDir = path.join(graphicsDir, 'Atlases');

	const atlases = [
		[ path.join(atlasesDir, 'Gameplay0.data'), path.join(storageSprites, 'Gameplay.png') ],
		// [ path.join(atlasesDir, 'Gui0.data'), path.join(storageSprites, 'Gui.png') ]
	];

	await rmfr(storageSprites);
	await mkdirp(storageSprites);
	for (let [ src, dst ] of atlases) {
		const png = await extractFromFile(src);
		await new Promise((resolve, reject) => {
			png
				.pack()
				.pipe(fs.createWriteStream(dst))
				.on('finish', resolve)
				.on('error', reject);
		});
	}

};
