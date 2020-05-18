const NoRefillTrigger = require('../../../../lib/api/triggers/NoRefillTrigger');

describe('triggers/NoRefillTrigger', () => {

	it('creates an instance', () => {
		const inst = new NoRefillTrigger();
		inst.name.should.equal('noRefillTrigger');
	});

});