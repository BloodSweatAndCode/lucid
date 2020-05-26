const TriggerSpikesOriginalLeft = require('../../../../lib/api/entities/TriggerSpikesOriginalLeft');

describe('entities/TriggerSpikesOriginalLeft', () => {

	it('creates an instance', () => {
		const inst = new TriggerSpikesOriginalLeft();
		inst.name.should.equal('triggerSpikesOriginalLeft');
	});

});