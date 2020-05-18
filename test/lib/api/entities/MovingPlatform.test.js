const MovingPlatform = require('../../../../lib/api/entities/MovingPlatform');

describe('entities/MovingPlatform', () => {

	it('creates an instance', () => {
		const inst = new MovingPlatform();
		inst.name.should.equal('movingPlatform');
	});

});