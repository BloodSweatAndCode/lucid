const ZipMover = require('../../../../lib/api/entities/ZipMover');

describe('entities/ZipMover', () => {

	it('creates an instance', () => {
		const inst = new ZipMover();
		inst.name.should.equal('zipMover');
	});

});