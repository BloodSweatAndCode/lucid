const Player = require('../../../../lib/api/entities/Player');

describe('entities/Player', () => {

	it('creates an instance', () => {
		const inst = new Player();
		inst.name.should.equal('player');
	});

});