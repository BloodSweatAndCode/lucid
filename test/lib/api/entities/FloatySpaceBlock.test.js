const FloatySpaceBlock = require('../../../../lib/api/entities/FloatySpaceBlock');

describe('entities/FloatySpaceBlock', () => {

	it('creates an instance', () => {
		const inst = new FloatySpaceBlock();
		inst.name.should.equal('floatySpaceBlock');
	});

});