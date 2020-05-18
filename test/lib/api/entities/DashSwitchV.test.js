const DashSwitchV = require('../../../../lib/api/entities/DashSwitchV');

describe('entities/DashSwitchV', () => {

	it('creates an instance', () => {
		const inst = new DashSwitchV();
		inst.name.should.equal('dashSwitchV');
	});

});