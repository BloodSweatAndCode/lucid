const CreditsTrigger = require('../../../../lib/api/triggers/CreditsTrigger');

describe('triggers/CreditsTrigger', () => {

	it('creates an instance', () => {
		const inst = new CreditsTrigger();
		inst.name.should.equal('creditsTrigger');
	});

});