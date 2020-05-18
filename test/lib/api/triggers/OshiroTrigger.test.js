const OshiroTrigger = require('../../../../lib/api/triggers/OshiroTrigger');

describe('triggers/OshiroTrigger', () => {

	it('creates an instance', () => {
		const inst = new OshiroTrigger();
		inst.name.should.equal('oshiroTrigger');
	});

});