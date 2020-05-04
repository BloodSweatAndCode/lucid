const path = require('path');

const config = module.exports = {
	logFile: path.join(process.cwd(), 'lucid.txt.log'),
	tmpDir: path.join(process.cwd(), 'tmp'),
	outputDir: path.join(process.cwd(), 'output'),
	testDir: path.join(__dirname, '..', 'test')
};

config.fixturesDir = path.join(config.testDir, 'fixtures');
config.testMapFile = path.join(config.fixturesDir, 'test.bin');
