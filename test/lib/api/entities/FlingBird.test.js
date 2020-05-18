const FlingBird = require('../../../../lib/api/entities/FlingBird');

describe('entities/FlingBird', () => {

	it('creates an instance', () => {
		const inst = new FlingBird();
		inst.name.should.equal('flingBird');
	});

});