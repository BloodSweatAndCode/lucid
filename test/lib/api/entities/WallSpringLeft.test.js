const WallSpringLeft = require('../../../../lib/api/entities/WallSpringLeft');

describe('entities/WallSpringLeft', () => {

	it('creates an instance', () => {
		const inst = new WallSpringLeft();
		inst.name.should.equal('wallSpringLeft');
	});

});