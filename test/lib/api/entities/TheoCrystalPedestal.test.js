const TheoCrystalPedestal = require('../../../../lib/api/entities/TheoCrystalPedestal');

describe('entities/TheoCrystalPedestal', () => {

	it('creates an instance', () => {
		const inst = new TheoCrystalPedestal();
		inst.name.should.equal('theoCrystalPedestal');
	});

});