const TheoCrystal = require('../../../../lib/api/entities/TheoCrystal');

describe('entities/TheoCrystal', () => {

	it('creates an instance', () => {
		const inst = new TheoCrystal();
		inst.name.should.equal('theoCrystal');
	});

});