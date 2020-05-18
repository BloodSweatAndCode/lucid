const Tentacles = require('../../../../lib/api/entities/Tentacles');

describe('entities/Tentacles', () => {

	it('creates an instance', () => {
		const inst = new Tentacles();
		inst.name.should.equal('tentacles');
	});

});