const Plateau = require('../../../../lib/api/entities/Plateau');

describe('entities/Plateau', () => {

	it('creates an instance', () => {
		const inst = new Plateau();
		inst.name.should.equal('plateau');
	});

});