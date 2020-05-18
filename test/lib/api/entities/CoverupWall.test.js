const CoverupWall = require('../../../../lib/api/entities/CoverupWall');

describe('entities/CoverupWall', () => {

	it('creates an instance', () => {
		const inst = new CoverupWall();
		inst.name.should.equal('coverupWall');
	});

});