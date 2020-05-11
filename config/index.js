const fs = require('fs');
const lucid = require('./lucid.json');
const os = require('os');
const path = require('path');

const config = {
	defaultModDir: {
		darwin: os.homedir() + '/Library/Application\\ Support/Steam/steamapps/common/Celeste/Celeste.app/Contents/MacOS/Mods',
		win32: 'C:\\Program Files (x86)\\Steam\\steamapps\\common\\Celeste\\Mods'
	}
};

// Ensure we have a mod directory and that it is valid. If no modDir is specified,
// try to find the default Steam+Everest installation locations.
let modDir = lucid.modDir;
if (!modDir) {
	const platform = os.platform();
	modDir = config.defaultModDir[platform];
	if (!modDir) {
		throw new Error(`No default mod directory for platform "${platform}". You must specifiy it in the "modDir" key of "config/lucid.json".`);
	}
}

if (!fs.existsSync(modDir)) {
	throw new Error(`mod directory "${modDir}" does not exist. Fix "modDir" path in "config/lucid.json".`);
}

// update config with dev values
config.modDir = modDir;
config.testDir = 'test';
config.fixturesDir = path.join(config.testDir, 'fixtures');
config.testMapName = 'test.bin';
config.testMapFile = path.join(config.fixturesDir, config.testMapName);
config.testMapDstFile = path.join(config.modDir, config.testMapName);

module.exports = Object.assign({}, lucid, config);