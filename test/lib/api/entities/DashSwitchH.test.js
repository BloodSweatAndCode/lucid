const DashSwitchH = require('../../../../lib/api/entities/DashSwitchH');

describe('entities/DashSwitchH', () => {

	it('creates an instance', () => {
		const inst = new DashSwitchH();
		inst.name.should.equal('dashSwitchH');
	});

});