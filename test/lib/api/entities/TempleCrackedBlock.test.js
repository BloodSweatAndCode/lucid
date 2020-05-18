const TempleCrackedBlock = require('../../../../lib/api/entities/TempleCrackedBlock');

describe('entities/TempleCrackedBlock', () => {

	it('creates an instance', () => {
		const inst = new TempleCrackedBlock();
		inst.name.should.equal('templeCrackedBlock');
	});

});