const RotatingPlatforms = require('../../../../lib/api/entities/RotatingPlatforms');

describe('entities/RotatingPlatforms', () => {

	it('creates an instance', () => {
		const inst = new RotatingPlatforms();
		inst.name.should.equal('rotatingPlatforms');
	});

});