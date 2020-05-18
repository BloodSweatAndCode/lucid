const SandwichLava = require('../../../../lib/api/entities/SandwichLava');

describe('entities/SandwichLava', () => {

	it('creates an instance', () => {
		const inst = new SandwichLava();
		inst.name.should.equal('sandwichLava');
	});

});