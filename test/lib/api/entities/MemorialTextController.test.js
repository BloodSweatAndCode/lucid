const MemorialTextController = require('../../../../lib/api/entities/MemorialTextController');

describe('entities/MemorialTextController', () => {

	it('creates an instance', () => {
		const inst = new MemorialTextController();
		inst.name.should.equal('memorialTextController');
	});

});