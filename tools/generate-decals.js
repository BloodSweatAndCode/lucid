const { config } = require('../lucid-dream');
const extract = require('../lib/extract');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const gameplayMetaPath = path.join(config.lucidDir, 'gameplayMeta.json');

(async function() {
	let json;

	// try to load cached metadata
	try {
		json = JSON.parse(await readFile(gameplayMetaPath, 'utf8'));
	} catch (err) {
		// no cached file present
	}

	// ectract the metadata, then cache it
	if (!json) {
		json = await extract();
		await writeFile(gameplayMetaPath, JSON.stringify(json, null, 2));
	}

	// find decals
	console.log(Object.keys(json)
		.filter(k => k.indexOf('decals/') === 0)
		.map(k => k.replace(/^decals\//, ''))
		.map(k => k.replace(/\//g, '\\'))
		.sort()
	);
})();