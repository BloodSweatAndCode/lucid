const CoreModeToggle = require('../../../../lib/api/entities/CoreModeToggle');

describe('entities/CoreModeToggle', () => {

	it('creates an instance', () => {
		const inst = new CoreModeToggle();
		inst.name.should.equal('coreModeToggle');
	});

});