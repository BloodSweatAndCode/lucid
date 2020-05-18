const SpikesLeft = require('../../../../lib/api/entities/SpikesLeft');

describe('entities/SpikesLeft', () => {

	it('creates an instance', () => {
		const inst = new SpikesLeft();
		inst.name.should.equal('spikesLeft');
	});

});