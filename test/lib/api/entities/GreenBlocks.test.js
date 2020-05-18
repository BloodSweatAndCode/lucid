const GreenBlocks = require('../../../../lib/api/entities/GreenBlocks');

describe('entities/GreenBlocks', () => {

	it('creates an instance', () => {
		const inst = new GreenBlocks();
		inst.name.should.equal('greenBlocks');
	});

});