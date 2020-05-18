const Hahaha = require('../../../../lib/api/entities/Hahaha');

describe('entities/Hahaha', () => {

	it('creates an instance', () => {
		const inst = new Hahaha();
		inst.name.should.equal('hahaha');
	});

});