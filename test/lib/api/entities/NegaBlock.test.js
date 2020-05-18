const NegaBlock = require('../../../../lib/api/entities/NegaBlock');

describe('entities/NegaBlock', () => {

	it('creates an instance', () => {
		const inst = new NegaBlock();
		inst.name.should.equal('negaBlock');
	});

});