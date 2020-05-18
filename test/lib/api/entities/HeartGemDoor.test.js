const HeartGemDoor = require('../../../../lib/api/entities/HeartGemDoor');

describe('entities/HeartGemDoor', () => {

	it('creates an instance', () => {
		const inst = new HeartGemDoor();
		inst.name.should.equal('heartGemDoor');
	});

});