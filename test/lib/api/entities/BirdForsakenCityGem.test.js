const BirdForsakenCityGem = require('../../../../lib/api/entities/BirdForsakenCityGem');

describe('entities/BirdForsakenCityGem', () => {

	it('creates an instance', () => {
		const inst = new BirdForsakenCityGem();
		inst.name.should.equal('birdForsakenCityGem');
	});

});