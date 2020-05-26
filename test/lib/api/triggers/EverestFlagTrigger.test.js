const EverestFlagTrigger = require('../../../../lib/api/triggers/EverestFlagTrigger');

describe('triggers/EverestFlagTrigger', () => {

	it('creates an instance', () => {
		const inst = new EverestFlagTrigger();
		inst.name.should.equal('everestFlagTrigger');
	});

});