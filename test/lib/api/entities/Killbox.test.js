const Killbox = require('../../../../lib/api/entities/Killbox');

describe('entities/Killbox', () => {

	it('creates an instance', () => {
		const inst = new Killbox();
		inst.name.should.equal('killbox');
	});

});