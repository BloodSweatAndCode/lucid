const SpawnFacingTrigger = require('../../../../lib/api/triggers/SpawnFacingTrigger');

describe('triggers/SpawnFacingTrigger', () => {

	it('creates an instance', () => {
		const inst = new SpawnFacingTrigger();
		inst.name.should.equal('spawnFacingTrigger');
	});

});