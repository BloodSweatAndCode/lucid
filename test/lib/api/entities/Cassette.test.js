const Cassette = require('../../../../lib/api/entities/Cassette');

describe('entities/Cassette', () => {

	it('creates an instance', () => {
		const inst = new Cassette();
		inst.name.should.equal('cassette');
	});

});