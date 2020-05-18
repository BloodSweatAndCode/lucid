const bin = require('../../../lib/parser/bin');
const path = require('path');

const fixturesDir = path.join(__dirname, '..', '..', 'fixtures');

describe('parser/bin', () => {

	it('rejects on invalid bin file', async () => {
		return bin.decode(path.join(fixturesDir, 'bad.bin'))
			.should.be.rejectedWith(/invalid header/);
	});

});