const StarJumpBlock = require('../../../../lib/api/entities/StarJumpBlock');

describe('entities/StarJumpBlock', () => {

	it('creates an instance', () => {
		const inst = new StarJumpBlock();
		inst.name.should.equal('starJumpBlock');
	});

});