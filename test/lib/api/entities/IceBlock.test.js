const IceBlock = require('../../../../lib/api/entities/IceBlock');

describe('entities/IceBlock', () => {

	it('creates an instance', () => {
		const inst = new IceBlock();
		inst.name.should.equal('iceBlock');
	});

});