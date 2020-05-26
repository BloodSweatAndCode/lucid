const CustomStarClimbGraphicsController = require('../../../../lib/api/entities/CustomStarClimbGraphicsController');

describe('entities/CustomStarClimbGraphicsController', () => {

	it('creates an instance', () => {
		const inst = new CustomStarClimbGraphicsController();
		inst.name.should.equal('customStarClimbGraphicsController');
	});

});