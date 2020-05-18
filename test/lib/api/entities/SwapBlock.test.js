const SwapBlock = require('../../../../lib/api/entities/SwapBlock');

describe('entities/SwapBlock', () => {

	it('creates an instance', () => {
		const inst = new SwapBlock();
		inst.name.should.equal('swapBlock');
	});

});