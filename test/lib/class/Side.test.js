const fs = require('fs').promises;
const path = require('path');
const { testMapFile, tmpDir } = require('../../../config');
const { Map, Side } = require('../../../lib/class');

const sideNames = [ 'A', 'B', 'C' ];
const binFile = testMapFile;

describe('Side', () => {

	let side;
	beforeEach(() => {
		side = new Side();
	});

	describe('#constructor', () => {

		it('instantiates', () => {
			side.map.should.be.instanceOf(Map);
			side.data.should.be.empty();
			side.sideName.should.equal('');
		});

	});

	describe('#load', () => {

		it('rejects when no file is provided', () => {
			return side.load().should.be.rejectedWith('must provide a map file');
		});

		it ('rejects when file is not a string', () => {
			return side.load(123).should.be.rejectedWith('map file argument must be a string');
		});

		it ('rejects when file is not a .bin file', () => {
			return side.load('foobar.quux').should.be.rejectedWith(/must have a \.bin extension/);
		});

		for (let sideName of sideNames) {
			it(`loads ${sideName}-side with no metadata`, async () => {
				const file = sideName === 'A' ? binFile :
					binFile.replace(/.bin$/, `-${sideName}.bin`);
				await side.load(file);
				side.sideName.should.equal(sideName);
				side.map.rooms[0].name.should.equal('1');
				side.data.should.be.empty();
			});

			it.skip(`loads ${sideName}-side with metadata`);
		}

	});

	describe('#encode', () => {

		it('writes .bin file to output', async () => {
			const file = 'Side-encode.bin';
			const filepath = path.join(tmpDir, file);
			const srcLenRounded = Math.round((await fs.readFile('test/fixtures/test.bin')).length / 100) * 100;
			await side.load(binFile);
			await side.encode(filepath);
			const buf = await fs.readFile(filepath);
			(Math.round(buf.length / 100) * 100).should.equal(srcLenRounded);
			buf.toString('utf8', 1, 12).should.equal('CELESTE_MAP');
		});

	});

	describe('#loadMetadata', () => {

		it('loads metadata', () => {
			side.loadMetadata().should.eql({});
			side.loadMetadata({}).should.eql({});
			side.loadMetadata({ __children: [] }).should.eql({});
			side.loadMetadata({
				__children: [
					{ __name: 'foo', bar: 'quux', __fake: 123 },
					{ __name: 'nodes', bar: 'quux' },
					{ __name: 'bsac', x: 123, __none: 432, y: 32 }
				]
			}).should.eql({
				foo: { bar: 'quux' },
				nodes: { bar: 'quux' },
				bsac: { x: 123, y: 32 }
			});
		});

	});

	describe('#encodeMetadata', () => {

		it('encodes metadata', () => {
			const target = { __children: [] };
			side.encodeMetadata(target, { foo: { taco: 'bar' }, bsac: { mad: 'coder'} });
			target.should.eql({
				__children: [
					{
						__name: 'foo',
						taco: 'bar'
					},
					{
						__name: 'bsac',
						mad: 'coder'
					}
				]
			});
		});

	});

});