const SpikesRight = require('../../../../lib/api/entities/SpikesRight');

describe('entities/SpikesRight', () => {

	it('creates an instance', () => {
		const inst = new SpikesRight();
		inst.name.should.equal('spikesRight');
	});

});