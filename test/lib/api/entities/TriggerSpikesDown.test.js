const TriggerSpikesDown = require('../../../../lib/api/entities/TriggerSpikesDown');

describe('entities/TriggerSpikesDown', () => {

	it('creates an instance', () => {
		const inst = new TriggerSpikesDown();
		inst.name.should.equal('triggerSpikesDown');
	});

});