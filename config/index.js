const path = require('path');

const config = module.exports = {
	modDir: 'C:\\Program Files (x86)\\Steam\\steamapps\\common\\Celeste\\Mods',
	// modDir: '/Users/tony/Library/Application\ Support/Steam/steamapps/common/Celeste/Celeste.app/Contents/MacOS/Mods',
	logFile: path.join(process.cwd(), 'lucid.txt.log'),
	tmpDir: path.join(process.cwd(), 'tmp'),
	outputDir: path.join(process.cwd(), 'output'),
	testDir: path.join(__dirname, '..', 'test')
};

config.fixturesDir = path.join(config.testDir, 'fixtures');
config.testMapName = 'test.bin';
config.testMapFile = path.join(config.fixturesDir, config.testMapName);
config.testMapDstFile = path.join(config.modDir, config.testMapName);
