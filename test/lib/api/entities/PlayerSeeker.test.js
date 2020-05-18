const PlayerSeeker = require('../../../../lib/api/entities/PlayerSeeker');

describe('entities/PlayerSeeker', () => {

	it('creates an instance', () => {
		const inst = new PlayerSeeker();
		inst.name.should.equal('playerSeeker');
	});

});