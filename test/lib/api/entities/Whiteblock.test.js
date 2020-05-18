const Whiteblock = require('../../../../lib/api/entities/Whiteblock');

describe('entities/Whiteblock', () => {

	it('creates an instance', () => {
		const inst = new Whiteblock();
		inst.name.should.equal('whiteblock');
	});

});