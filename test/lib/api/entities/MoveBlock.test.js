const MoveBlock = require('../../../../lib/api/entities/MoveBlock');

describe('entities/MoveBlock', () => {

	it('creates an instance', () => {
		const inst = new MoveBlock();
		inst.name.should.equal('moveBlock');
	});

});