const Spring = require('../../../../lib/api/entities/Spring');

describe('entities/Spring', () => {

	it('creates an instance', () => {
		const inst = new Spring();
		inst.name.should.equal('spring');
	});

});