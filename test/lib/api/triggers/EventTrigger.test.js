const EventTrigger = require('../../../../lib/api/triggers/EventTrigger');

describe('triggers/EventTrigger', () => {

	it('creates an instance', () => {
		const inst = new EventTrigger();
		inst.name.should.equal('eventTrigger');
	});

});