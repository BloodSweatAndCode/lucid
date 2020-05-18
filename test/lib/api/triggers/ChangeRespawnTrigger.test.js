const ChangeRespawnTrigger = require('../../../../lib/api/triggers/ChangeRespawnTrigger');

describe('triggers/ChangeRespawnTrigger', () => {

	it('creates an instance', () => {
		const inst = new ChangeRespawnTrigger();
		inst.name.should.equal('changeRespawnTrigger');
	});

});