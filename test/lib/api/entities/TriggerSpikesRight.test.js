const TriggerSpikesRight = require('../../../../lib/api/entities/TriggerSpikesRight');

describe('entities/TriggerSpikesRight', () => {

	it('creates an instance', () => {
		const inst = new TriggerSpikesRight();
		inst.name.should.equal('triggerSpikesRight');
	});

});