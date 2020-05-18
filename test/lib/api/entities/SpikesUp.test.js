const SpikesUp = require('../../../../lib/api/entities/SpikesUp');

describe('entities/SpikesUp', () => {

	it('creates an instance', () => {
		const inst = new SpikesUp();
		inst.name.should.equal('spikesUp');
	});

});