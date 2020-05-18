const FinalBoss = require('../../../../lib/api/entities/FinalBoss');

describe('entities/FinalBoss', () => {

	it('creates an instance', () => {
		const inst = new FinalBoss();
		inst.name.should.equal('finalBoss');
	});

});