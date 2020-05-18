const MoonCreature = require('../../../../lib/api/entities/MoonCreature');

describe('entities/MoonCreature', () => {

	it('creates an instance', () => {
		const inst = new MoonCreature();
		inst.name.should.equal('moonCreature');
	});

});