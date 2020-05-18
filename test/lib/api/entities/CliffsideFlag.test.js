const CliffsideFlag = require('../../../../lib/api/entities/CliffsideFlag');

describe('entities/CliffsideFlag', () => {

	it('creates an instance', () => {
		const inst = new CliffsideFlag();
		inst.name.should.equal('cliffside_flag');
	});

});