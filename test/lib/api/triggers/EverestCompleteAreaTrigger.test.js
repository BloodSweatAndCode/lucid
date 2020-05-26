const EverestCompleteAreaTrigger = require('../../../../lib/api/triggers/EverestCompleteAreaTrigger');

describe('triggers/EverestCompleteAreaTrigger', () => {

	it('creates an instance', () => {
		const inst = new EverestCompleteAreaTrigger();
		inst.name.should.equal('everestCompleteAreaTrigger');
	});

});