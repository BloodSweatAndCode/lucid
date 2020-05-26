const EverestChangeInventoryTrigger = require('../../../../lib/api/triggers/EverestChangeInventoryTrigger');

describe('triggers/EverestChangeInventoryTrigger', () => {

	it('creates an instance', () => {
		const inst = new EverestChangeInventoryTrigger();
		inst.name.should.equal('everestChangeInventoryTrigger');
	});

});