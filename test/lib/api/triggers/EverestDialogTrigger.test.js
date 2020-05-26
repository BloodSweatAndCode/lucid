const EverestDialogTrigger = require('../../../../lib/api/triggers/EverestDialogTrigger');

describe('triggers/EverestDialogTrigger', () => {

	it('creates an instance', () => {
		const inst = new EverestDialogTrigger();
		inst.name.should.equal('everestDialogTrigger');
	});

});