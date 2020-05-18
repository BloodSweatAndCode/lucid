const BounceBlock = require('../../../../lib/api/entities/BounceBlock');

describe('entities/BounceBlock', () => {

	it('creates an instance', () => {
		const inst = new BounceBlock();
		inst.name.should.equal('bounceBlock');
	});

});