const EverestLavaBlockerTrigger = require('../../../../lib/api/triggers/EverestLavaBlockerTrigger');

describe('triggers/EverestLavaBlockerTrigger', () => {

	it('creates an instance', () => {
		const inst = new EverestLavaBlockerTrigger();
		inst.name.should.equal('everestLavaBlockerTrigger');
	});

});