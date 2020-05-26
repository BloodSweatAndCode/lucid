const TriggerSpikesOriginalRight = require('../../../../lib/api/entities/TriggerSpikesOriginalRight');

describe('entities/TriggerSpikesOriginalRight', () => {

	it('creates an instance', () => {
		const inst = new TriggerSpikesOriginalRight();
		inst.name.should.equal('triggerSpikesOriginalRight');
	});

});