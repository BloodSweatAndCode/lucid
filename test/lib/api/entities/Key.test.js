const Key = require('../../../../lib/api/entities/Key');

describe('entities/Key', () => {

	it('creates an instance', () => {
		const inst = new Key();
		inst.name.should.equal('key');
	});

});