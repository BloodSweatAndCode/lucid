const FallingBlock = require('../../../../lib/api/entities/FallingBlock');

describe('entities/FallingBlock', () => {

	it('creates an instance', () => {
		const inst = new FallingBlock();
		inst.name.should.equal('fallingBlock');
	});

});