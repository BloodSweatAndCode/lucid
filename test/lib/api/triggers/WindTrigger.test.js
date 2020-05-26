const WindTrigger = require('../../../../lib/api/triggers/WindTrigger');

describe('triggers/WindTrigger', () => {

	it('creates an instance', () => {
		const inst = new WindTrigger();
		inst.name.should.equal('windTrigger');
	});

});