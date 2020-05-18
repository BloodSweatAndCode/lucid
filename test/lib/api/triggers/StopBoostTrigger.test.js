const StopBoostTrigger = require('../../../../lib/api/triggers/StopBoostTrigger');

describe('triggers/StopBoostTrigger', () => {

	it('creates an instance', () => {
		const inst = new StopBoostTrigger();
		inst.name.should.equal('stopBoostTrigger');
	});

});