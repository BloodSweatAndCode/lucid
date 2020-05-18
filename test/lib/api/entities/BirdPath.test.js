const BirdPath = require('../../../../lib/api/entities/BirdPath');

describe('entities/BirdPath', () => {

	it('creates an instance', () => {
		const inst = new BirdPath();
		inst.name.should.equal('birdPath');
	});

});