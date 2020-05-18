const FireBall = require('../../../../lib/api/entities/FireBall');

describe('entities/FireBall', () => {

	it('creates an instance', () => {
		const inst = new FireBall();
		inst.name.should.equal('fireBall');
	});

});