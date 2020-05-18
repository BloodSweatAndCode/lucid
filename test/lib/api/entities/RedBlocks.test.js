const RedBlocks = require('../../../../lib/api/entities/RedBlocks');

describe('entities/RedBlocks', () => {

	it('creates an instance', () => {
		const inst = new RedBlocks();
		inst.name.should.equal('redBlocks');
	});

});