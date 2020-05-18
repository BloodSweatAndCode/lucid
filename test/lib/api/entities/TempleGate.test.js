const TempleGate = require('../../../../lib/api/entities/TempleGate');

describe('entities/TempleGate', () => {

	it('creates an instance', () => {
		const inst = new TempleGate();
		inst.name.should.equal('templeGate');
	});

});