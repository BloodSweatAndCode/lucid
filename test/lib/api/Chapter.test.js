const Chapter = require('../../../lib/api/Chapter');
const path = require('path');
const Side = require('../../../lib/api/Side');
const parser = require('../../../lib/parser');
const { tmpDir } = global.testConfig;

describe('Chapter', () => {

	describe('#constructor', () => {

		it('instantiates', () => {
			const chapter = new Chapter();
			chapter.name.should.equal('Lucid Dream Chapter');
			chapter.sides.A.should.be.instanceOf(Side);
		});

		it('instantiates with data', () => {
			const name = 'Chapter 1';
			const sides = {
				A: new Side(),
				B: new Side(),
				C: new Side()
			};
			const chapter = new Chapter({ name, sides });
			chapter.name.should.equal(name);
			chapter.sides.A.should.be.instanceOf(Side);
			chapter.sides.B.should.be.instanceOf(Side);
			chapter.sides.C.should.be.instanceOf(Side);
		});

	});

	describe('#package', () => {

		let chapter;
		beforeEach(() => {
			chapter = new Chapter;
		});

		it('rejects when no dir is provided', async () => {
			return chapter.package().should.be.rejectedWith(/Must specify a directory/);
		});

		it('rejects if no sides are available', async () => {
			chapter.sides = {};
			return chapter.package(tmpDir).should.be.rejectedWith(/No sides defined/);
		});

		it('rejects if no A-Side is available', async () => {
			chapter.sides = { B: new Side() };
			return chapter.package(tmpDir).should.be.rejectedWith(/No A-Side defined/);
		});

		it('packages a side to a .bin file', async () => {
			await chapter.package(tmpDir);
			const data = await parser.bin.decode(path.join(tmpDir, 'lucidDreamChapter.bin'));
			data._package.should.equal('lucid');
		});

	});

});