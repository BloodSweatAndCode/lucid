const KevinsPc = require('../../../../lib/api/entities/KevinsPc');

describe('entities/KevinsPc', () => {

	it('creates an instance', () => {
		const inst = new KevinsPc();
		inst.name.should.equal('kevins_pc');
	});

});