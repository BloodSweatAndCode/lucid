const DashBlock = require('../../../../lib/api/entities/DashBlock');

describe('entities/DashBlock', () => {

	it('creates an instance', () => {
		const inst = new DashBlock();
		inst.name.should.equal('dashBlock');
	});

});