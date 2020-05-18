const CassetteBlock = require('../../../../lib/api/entities/CassetteBlock');

describe('entities/CassetteBlock', () => {

	it('creates an instance', () => {
		const inst = new CassetteBlock();
		inst.name.should.equal('cassetteBlock');
	});

});