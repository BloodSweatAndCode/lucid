const SeekerBarrier = require('../../../../lib/api/entities/SeekerBarrier');

describe('entities/SeekerBarrier', () => {

	it('creates an instance', () => {
		const inst = new SeekerBarrier();
		inst.name.should.equal('seekerBarrier');
	});

});