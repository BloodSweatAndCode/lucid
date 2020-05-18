const RidgeGate = require('../../../../lib/api/entities/RidgeGate');

describe('entities/RidgeGate', () => {

	it('creates an instance', () => {
		const inst = new RidgeGate();
		inst.name.should.equal('ridgeGate');
	});

});