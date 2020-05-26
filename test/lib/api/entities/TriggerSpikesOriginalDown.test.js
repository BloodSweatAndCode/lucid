const TriggerSpikesOriginalDown = require('../../../../lib/api/entities/TriggerSpikesOriginalDown');

describe('entities/TriggerSpikesOriginalDown', () => {

	it('creates an instance', () => {
		const inst = new TriggerSpikesOriginalDown();
		inst.name.should.equal('triggerSpikesOriginalDown');
	});

});