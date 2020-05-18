const Cliffflag = require('../../../../lib/api/entities/Cliffflag');

describe('entities/Cliffflag', () => {

	it('creates an instance', () => {
		const inst = new Cliffflag();
		inst.name.should.equal('cliffflag');
	});

});