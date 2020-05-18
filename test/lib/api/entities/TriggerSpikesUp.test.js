const TriggerSpikesUp = require('../../../../lib/api/entities/TriggerSpikesUp');

describe('entities/TriggerSpikesUp', () => {

	it('creates an instance', () => {
		const inst = new TriggerSpikesUp();
		inst.name.should.equal('triggerSpikesUp');
	});

});