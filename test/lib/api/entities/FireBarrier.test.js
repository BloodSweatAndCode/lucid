const FireBarrier = require('../../../../lib/api/entities/FireBarrier');

describe('entities/FireBarrier', () => {

	it('creates an instance', () => {
		const inst = new FireBarrier();
		inst.name.should.equal('fireBarrier');
	});

});