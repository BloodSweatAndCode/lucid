const FinalBossFallingBlock = require('../../../../lib/api/entities/FinalBossFallingBlock');

describe('entities/FinalBossFallingBlock', () => {

	it('creates an instance', () => {
		const inst = new FinalBossFallingBlock();
		inst.name.should.equal('finalBossFallingBlock');
	});

});