const Seeker = require('../../../../lib/api/entities/Seeker');

describe('entities/Seeker', () => {

	it('creates an instance', () => {
		const inst = new Seeker();
		inst.name.should.equal('seeker');
	});

});