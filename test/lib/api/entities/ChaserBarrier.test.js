const ChaserBarrier = require('../../../../lib/api/entities/ChaserBarrier');

describe('entities/ChaserBarrier', () => {

	it('creates an instance', () => {
		const inst = new ChaserBarrier();
		inst.name.should.equal('chaserBarrier');
	});

});