const TriggerSpikesOriginalUp = require('../../../../lib/api/entities/TriggerSpikesOriginalUp');

describe('entities/TriggerSpikesOriginalUp', () => {

	it('creates an instance', () => {
		const inst = new TriggerSpikesOriginalUp();
		inst.name.should.equal('triggerSpikesOriginalUp');
	});

});