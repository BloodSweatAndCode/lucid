const SwitchBlock = require('../../../../lib/api/entities/SwitchBlock');

describe('entities/SwitchBlock', () => {

	it('creates an instance', () => {
		const inst = new SwitchBlock();
		inst.name.should.equal('switchBlock');
	});

});