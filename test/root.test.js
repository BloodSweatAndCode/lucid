const mkdirp = require('mkdirp');
const rmfr = require('rmfr');

const { outputDir, tmpDir } = global.testConfig;

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