const Chapter = require('../../../lib/api/Chapter');
const Dialog = require('../../../lib/api/Dialog');
const fs = require('fs');
const Mod = require('../../../lib/api/Mod');
const path = require('path');
const YAML = require('yamljs');
const { tmpDir } = global.testConfig;
const { promisify } = require('util');

const access = promisify(fs.access);
const readFile = promisify(fs.readFile);

describe('Mod', () => {

	describe('#constructor', () => {

		it('instantiates', () => {
			const mod = new Mod();
			mod.name.should.equal('Lucid Dream Default');
			mod.version.should.equal('0.0.1');
			mod.author.should.equal('Lucid Dream Author');
			mod.dependencies[0].name.should.equal('Everest');
			mod.dependencies[0].version.should.equal('1.0.0');
			mod.chapters.should.be.an.Array();
			mod.dialog.should.be.instanceOf(Dialog);
		});

		it('instantiates with data', () => {
			const name = 'My Mod';
			const version = '9.9.9';
			const author = 'BSAC';
			const mod = new Mod({ name, version, author });
			mod.name.should.equal(name);
			mod.version.should.equal(version);
			mod.author.should.equal(author);
			mod.dependencies[0].name.should.equal('Everest');
			mod.dependencies[0].version.should.equal('1.0.0');
			mod.chapters.should.be.an.Array();
			mod.dialog.should.be.instanceOf(Dialog);
		});

	});

	describe('#package', () => {

		let mod;
		before(() => {
			mod = new Mod({
				name: 'Test Mod' ,
				chapters: [ new Chapter({ name: 'Test Chapter' }) ]
			});
		});

		it('packages a Mod', async () => {
			await mod.package(tmpDir);
			const modDir = path.join(tmpDir, 'TestMod');
			access(modDir).should.be.fulfilled();

			const yaml = await readFile(path.join(modDir, 'everest.yaml'), 'utf8');
			const json = YAML.parse(yaml);
			json.Name.should.equal('Test Mod');
			json.Version.should.equal('0.0.1');
			json.Dependencies[0].Name.should.equal('Everest');
			json.Dependencies[0].Version.should.equal('1.0.0');

			access(path.join(modDir, 'Maps', 'testMod', 'lucidDreamAuthor', 'testChapter.bin')).should.be.fulfilled();

			const text = await readFile(path.join(modDir, 'Dialog', 'English.txt'), 'utf8');
			text.trim().should.equal(`testMod_lucidDreamAuthor=Test Mod
testMod_lucidDreamAuthor_testChapter=Test Chapter`);
		});

		it('packages a Mod as a zip', async () => {
			await mod.package(tmpDir, { zip: true });
			return access(path.join(tmpDir, 'TestMod.zip')).should.be.fulfilled();
		});

	});

});