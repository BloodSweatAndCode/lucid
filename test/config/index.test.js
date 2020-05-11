const fs = require('fs');
const os = require('os');
const path = require('path');

function deleteCache() {
	delete require.cache[require.resolve('../../config/index.js')];
	delete require.cache[require.resolve('../../config/lucid.json')];
}

describe('config/index.js', () => {

	// mocks
	const origOsPlatform = os.platform;
	const origFsExistsSync = fs.existsSync;

	beforeEach(deleteCache);

	afterEach(() => {
		os.platform = origOsPlatform;
		fs.existsSync = origFsExistsSync;
	});

	after(deleteCache);

	it('throws if no default modDir directory can be found', () => {
		os.platform = () => 'linux';
		const lucid = require('../../config/lucid.json');
		delete lucid.modDir;
		(function checkConfig() {
			console.log(require('../../config/index.js'));
		}).should.throw(/No default mod directory for platform/);
	});

	it('throws if a non-existent directory is specified for modDir', () => {
		const lucid = require('../../config/lucid.json');
		lucid.modDir = path.join(__dirname, 'thisdoesnotexist');
		(function checkConfig() {
			console.log(require('../../config/index.js'));
		}).should.throw(/does not exist/);
	});

	it('uses default modDir if none is specified', () => {
		fs.existsSync = () => true;

		for (let platform of [ 'darwin', 'win32' ]) {
			os.platform = () => platform;
			deleteCache();
			const lucid = require('../../config/lucid.json');
			delete lucid.modDir;
			const config = require('../../config');
			config.modDir.should.equal(config.defaultModDir[platform]);
		}
	});

});