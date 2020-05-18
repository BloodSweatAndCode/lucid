const CheckpointBlockerTrigger = require('../../../../lib/api/triggers/CheckpointBlockerTrigger');

describe('triggers/CheckpointBlockerTrigger', () => {

	it('creates an instance', () => {
		const inst = new CheckpointBlockerTrigger();
		inst.name.should.equal('checkpointBlockerTrigger');
	});

});