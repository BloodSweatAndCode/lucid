const TriggerSpikesLeft = require('../../../../lib/api/entities/TriggerSpikesLeft');

describe('entities/TriggerSpikesLeft', () => {

	it('creates an instance', () => {
		const inst = new TriggerSpikesLeft();
		inst.name.should.equal('triggerSpikesLeft');
	});

});