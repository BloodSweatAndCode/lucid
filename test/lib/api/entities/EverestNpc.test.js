const EverestNpc = require('../../../../lib/api/entities/EverestNpc');

describe('entities/EverestNpc', () => {

	it('creates an instance', () => {
		const inst = new EverestNpc();
		inst.name.should.equal('everestNpc');
	});

});