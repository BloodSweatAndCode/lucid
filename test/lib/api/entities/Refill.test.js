const Refill = require('../../../../lib/api/entities/Refill');

describe('entities/Refill', () => {

	it('creates an instance', () => {
		const inst = new Refill();
		inst.name.should.equal('refill');
	});

});