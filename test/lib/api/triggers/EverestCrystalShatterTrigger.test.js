const EverestCrystalShatterTrigger = require('../../../../lib/api/triggers/EverestCrystalShatterTrigger');

describe('triggers/EverestCrystalShatterTrigger', () => {

	it('creates an instance', () => {
		const inst = new EverestCrystalShatterTrigger();
		inst.name.should.equal('everestCrystalShatterTrigger');
	});

});