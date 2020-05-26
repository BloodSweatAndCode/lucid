const EverestStarClimbGraphicsController = require('../../../../lib/api/entities/EverestStarClimbGraphicsController');

describe('entities/EverestStarClimbGraphicsController', () => {

	it('creates an instance', () => {
		const inst = new EverestStarClimbGraphicsController();
		inst.name.should.equal('everestStarClimbGraphicsController');
	});

});