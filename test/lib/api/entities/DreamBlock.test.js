const DreamBlock = require('../../../../lib/api/entities/DreamBlock');

describe('entities/DreamBlock', () => {

	it('creates an instance', () => {
		const inst = new DreamBlock();
		inst.name.should.equal('dreamBlock');
	});

});