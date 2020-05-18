const FloatingDebris = require('../../../../lib/api/entities/FloatingDebris');

describe('entities/FloatingDebris', () => {

	it('creates an instance', () => {
		const inst = new FloatingDebris();
		inst.name.should.equal('floatingDebris');
	});

});