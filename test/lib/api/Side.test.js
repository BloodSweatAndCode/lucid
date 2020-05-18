const fs = require('fs').promises;
const path = require('path');
const { Map, Side } = require('../../../lucid-dream');

const { binFile, tmpDir } = global.testConfig;
const sideNames = [ 'A', 'B', 'C' ];

describe('Side', () => {

	let side;
	beforeEach(() => {
		side = new Side();
	});

	describe('#constructor', () => {

		it('instantiates', () => {
			side.map.should.be.instanceOf(Map);
			side.data.should.be.empty();
			side.sideName.should.equal('A');
		});

		it('instantiates with opts', () => {
			const data = 123;
			const sideName = 'B';
			let side = new Side({ data, sideName });
			side.map.should.be.instanceOf(Map);
			side.data.should.equal(data);
			side.sideName.should.equal(sideName);
		});

	});

	describe('#decode', () => {

		it('rejects when no file is provided', () => {
			return side.decode().should.be.rejectedWith('must provide a map file');
		});

		it ('rejects when file is not a string', () => {
			return side.decode(123).should.be.rejectedWith('map file argument must be a string');
		});

		it ('rejects when file is not a .bin file', () => {
			return side.decode('foobar.quux').should.be.rejectedWith(/must have a \.bin extension/);
		});

		for (let sideName of sideNames) {
			it(`decodes ${sideName}-side with no metadata`, async () => {
				const file = sideName === 'A' ? binFile :
					binFile.replace(/.bin$/, `-${sideName}.bin`);
				await side.decode(file);
				side.sideName.should.equal(sideName);
				side.map.rooms[0].name.should.equal('1');
				side.data.should.be.empty();
			});

			it.skip(`decodes ${sideName}-side with metadata`);
		}

	});

	describe('#encode', () => {

		it('writes .bin file to output', async () => {
			const file = 'Side-encode.bin';
			const filepath = path.join(tmpDir, file);
			const srcLenRounded = Math.round((await fs.readFile('test/fixtures/test.bin')).length / 100) * 100;
			await side.decode(binFile);
			await side.encode(filepath);
			const buf = await fs.readFile(filepath);
			(Math.round(buf.length / 100) * 100).should.equal(srcLenRounded);
			buf.toString('utf8', 1, 12).should.equal('CELESTE MAP');
		});

	});

});