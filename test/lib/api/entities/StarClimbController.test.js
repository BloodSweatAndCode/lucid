const StarClimbController = require('../../../../lib/api/entities/StarClimbController');

describe('entities/StarClimbController', () => {

	it('creates an instance', () => {
		const inst = new StarClimbController();
		inst.name.should.equal('starClimbController');
	});

});