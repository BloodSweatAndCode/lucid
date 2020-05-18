const WindAttackTrigger = require('../../../../lib/api/triggers/WindAttackTrigger');

describe('triggers/WindAttackTrigger', () => {

	it('creates an instance', () => {
		const inst = new WindAttackTrigger();
		inst.name.should.equal('windAttackTrigger');
	});

});