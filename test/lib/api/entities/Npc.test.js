const Npc = require('../../../../lib/api/entities/Npc');

describe('entities/Npc', () => {

	it('creates an instance', () => {
		const inst = new Npc();
		inst.name.should.equal('npc');
	});

});