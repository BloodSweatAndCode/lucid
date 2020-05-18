const Checkpoint = require('../../../../lib/api/entities/Checkpoint');

describe('entities/Checkpoint', () => {

	it('creates an instance', () => {
		const inst = new Checkpoint();
		inst.name.should.equal('checkpoint');
	});

});