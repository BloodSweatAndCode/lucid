const Trapdoor = require('../../../../lib/api/entities/Trapdoor');

describe('entities/Trapdoor', () => {

	it('creates an instance', () => {
		const inst = new Trapdoor();
		inst.name.should.equal('trapdoor');
	});

});