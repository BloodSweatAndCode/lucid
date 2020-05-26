const EverestCoreMessage = require('../../../../lib/api/entities/EverestCoreMessage');

describe('entities/EverestCoreMessage', () => {

	it('creates an instance', () => {
		const inst = new EverestCoreMessage();
		inst.name.should.equal('everestCoreMessage');
	});

});