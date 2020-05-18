const SpikesDown = require('../../../../lib/api/entities/SpikesDown');

describe('entities/SpikesDown', () => {

	it('creates an instance', () => {
		const inst = new SpikesDown();
		inst.name.should.equal('spikesDown');
	});

});