const FinalBossMovingBlock = require('../../../../lib/api/entities/FinalBossMovingBlock');

describe('entities/FinalBossMovingBlock', () => {

	it('creates an instance', () => {
		const inst = new FinalBossMovingBlock();
		inst.name.should.equal('finalBossMovingBlock');
	});

});