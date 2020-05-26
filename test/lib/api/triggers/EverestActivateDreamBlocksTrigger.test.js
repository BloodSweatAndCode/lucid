const EverestActivateDreamBlocksTrigger = require('../../../../lib/api/triggers/EverestActivateDreamBlocksTrigger');

describe('triggers/EverestActivateDreamBlocksTrigger', () => {

	it('creates an instance', () => {
		const inst = new EverestActivateDreamBlocksTrigger();
		inst.name.should.equal('everestActivateDreamBlocksTrigger');
	});

});