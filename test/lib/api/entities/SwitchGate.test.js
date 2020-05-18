const SwitchGate = require('../../../../lib/api/entities/SwitchGate');

describe('entities/SwitchGate', () => {

	it('creates an instance', () => {
		const inst = new SwitchGate();
		inst.name.should.equal('switchGate');
	});

});