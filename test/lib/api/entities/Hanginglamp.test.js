const Hanginglamp = require('../../../../lib/api/entities/Hanginglamp');

describe('entities/Hanginglamp', () => {

	it('creates an instance', () => {
		const inst = new Hanginglamp();
		inst.name.should.equal('hanginglamp');
	});

});