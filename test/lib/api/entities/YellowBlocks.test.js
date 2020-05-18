const YellowBlocks = require('../../../../lib/api/entities/YellowBlocks');

describe('entities/YellowBlocks', () => {

	it('creates an instance', () => {
		const inst = new YellowBlocks();
		inst.name.should.equal('yellowBlocks');
	});

});