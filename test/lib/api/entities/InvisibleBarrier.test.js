const InvisibleBarrier = require('../../../../lib/api/entities/InvisibleBarrier');

describe('entities/InvisibleBarrier', () => {

	it('creates an instance', () => {
		const inst = new InvisibleBarrier();
		inst.name.should.equal('invisibleBarrier');
	});

});