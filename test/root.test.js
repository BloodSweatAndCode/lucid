const { outputDir, tmpDir } = require('../config');
const mkdirp = require('mkdirp');
const rmfr = require('rmfr');

before(async () => {
	if (!tmpDir) {
		throw new Error('must define tmpDir in config/lucid.json');
	}
	await rmfr(tmpDir);
	await mkdirp(tmpDir);
	await mkdirp(outputDir);
});

after(async () => {
	if (!tmpDir) {
		throw new Error('must define tmpDir in config/lucid.json');
	}
	await rmfr(tmpDir);
});