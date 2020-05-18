const InteractTrigger = require('../../../../lib/api/triggers/InteractTrigger');

describe('triggers/InteractTrigger', () => {

	it('creates an instance', () => {
		const inst = new InteractTrigger();
		inst.name.should.equal('interactTrigger');
	});

});