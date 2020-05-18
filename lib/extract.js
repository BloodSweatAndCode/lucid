const config = require('../config/lucid-dream.json');
const DataReader = require('./DataReader');
const fs = require('fs');
const mkdirp = require('mkdirp');
const os = require('os');
const path = require('path');
const rmfr = require('rmfr');
const { promisify } = require('util');

const access = promisify(fs.access);
const copyFile = promisify(fs.copyFile);
const execFile = promisify(require('child_process').execFile);

const storage = path.join(__dirname, '..', 'output');
const storageXml = path.join(storage, 'XML');
const storageSprites = path.join(storage, 'Sprites');

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

	const xmls = [
		[ path.join(graphicsDir, 'ForegroundTiles.xml'), path.join(storageXml, 'ForegroundTiles.xml') ],
		[ path.join(graphicsDir, 'BackgroundTiles.xml'), path.join(storageXml, 'BackgroundTiles.xml') ],
		[ path.join(graphicsDir, 'AnimatedTiles.xml'), path.join(storageXml, 'AnimatedTiles.xml') ],
		[ path.join(graphicsDir, 'Sprites.xml'), path.join(storageXml, 'Sprites.xml') ],
		[ path.join(graphicsDir, 'Portraits.xml'), path.join(storageXml, 'Portraits.xml') ],

		[ path.join(atlasesDir, 'Gameplay.meta'), path.join(storageSprites, 'Gameplay.meta') ],
		[ path.join(atlasesDir, 'Gui.meta'), path.join(storageSprites, 'Gui.meta') ],
		[ path.join(atlasesDir, 'Portraits.meta'), path.join(storageSprites, 'Portraits.meta') ],
		[ path.join(atlasesDir, 'Misc.meta'), path.join(storageSprites, 'Misc.meta') ]
	];

	const atlases = [
		[ path.join(atlasesDir, 'Gameplay0.data'), path.join(storageSprites, 'Gameplay.png') ],
		[ path.join(atlasesDir, 'Gui0.data'), path.join(storageSprites, 'Gui.png') ]
	];

	for (let dir of [ storageSprites, storageXml ]) {
		await rmfr(dir);
		await mkdirp(dir);
	}

	// extracting .data files
	const promises = [];
	for (let [ src, dst ] of atlases) {
		console.log(`extracting ${path.basename(src)}...`);
		promises.push(execFile('node', [ './lib/datFileExtract.js', src, dst ]));
	}
	await Promise.all(promises).catch(err => { throw new Error(err.message); });

	// copying meta and xml files
	for (let [src, dst] of xmls) {
		console.log(`copying ${path.basename(src)}...`);
		await copyFile(src, dst);
	}

	// loading sprite metaadta
	const r = new DataReader(path.join(storageSprites, 'Gameplay.meta'));
	const metadata = {};

	// read off header data
	await r.readInt32();
	await r.readString();
	await r.readInt32();

	const count = await r.readInt16();
	for (let i = 0; i < count; i++) {
		await r.readString();
		const sprites = await r.readInt16();

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
				surface: null,
				filename: path.join(storageSprites, 'Gameplay.png')
			};

			const time = process.hrtime();
			metadata[filepath] = {
				sprite,
				readtime: time[0] * 1e9 + time[1],
				path: path.join(storageSprites, 'Gameplay.png')
			};
		}

		r.close();

		return metadata;
	}

};
