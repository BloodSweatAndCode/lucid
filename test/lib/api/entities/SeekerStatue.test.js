const SeekerStatue = require('../../../../lib/api/entities/SeekerStatue');

describe('entities/SeekerStatue', () => {

	it('creates an instance', () => {
		const inst = new SeekerStatue();
		inst.name.should.equal('seekerStatue');
	});

});