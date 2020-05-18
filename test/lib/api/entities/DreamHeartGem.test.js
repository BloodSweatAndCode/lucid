const DreamHeartGem = require('../../../../lib/api/entities/DreamHeartGem');

describe('entities/DreamHeartGem', () => {

	it('creates an instance', () => {
		const inst = new DreamHeartGem();
		inst.name.should.equal('dreamHeartGem');
	});

});