const Bonfire = require('../../../../lib/api/entities/Bonfire');

describe('entities/Bonfire', () => {

	it('creates an instance', () => {
		const inst = new Bonfire();
		inst.name.should.equal('bonfire');
	});

});