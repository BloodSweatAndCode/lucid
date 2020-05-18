const RumbleTrigger = require('../../../../lib/api/triggers/RumbleTrigger');

describe('triggers/RumbleTrigger', () => {

	it('creates an instance', () => {
		const inst = new RumbleTrigger();
		inst.name.should.equal('rumbleTrigger');
	});

});