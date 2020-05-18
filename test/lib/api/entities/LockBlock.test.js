const LockBlock = require('../../../../lib/api/entities/LockBlock');

describe('entities/LockBlock', () => {

	it('creates an instance', () => {
		const inst = new LockBlock();
		inst.name.should.equal('lockBlock');
	});

});