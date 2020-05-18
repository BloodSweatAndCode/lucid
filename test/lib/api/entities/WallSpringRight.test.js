const WallSpringRight = require('../../../../lib/api/entities/WallSpringRight');

describe('entities/WallSpringRight', () => {

	it('creates an instance', () => {
		const inst = new WallSpringRight();
		inst.name.should.equal('wallSpringRight');
	});

});