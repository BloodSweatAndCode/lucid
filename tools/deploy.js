const exec = require('util').promisify(require('child_process').exec);
const path = require('path');
const { findCelesteDir } = require('../lib/utils');

(async function() {
	const dst = path.join(await findCelesteDir(), 'Mods');
	const src = process.argv[2];

	if (!dst) {
		throw new Error('must specify a .bin file or mod folder/zip to deploy');
	}

	await exec(`cp -rf "${src}" "${dst}"`);
	console.log(`${path.basename(src)} copied to ${dst}`);
})();