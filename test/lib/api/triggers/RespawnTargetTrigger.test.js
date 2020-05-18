const RespawnTargetTrigger = require('../../../../lib/api/triggers/RespawnTargetTrigger');

describe('triggers/RespawnTargetTrigger', () => {

	it('creates an instance', () => {
		const inst = new RespawnTargetTrigger();
		inst.name.should.equal('respawnTargetTrigger');
	});

});