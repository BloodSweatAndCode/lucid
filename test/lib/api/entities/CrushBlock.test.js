const CrushBlock = require('../../../../lib/api/entities/CrushBlock');

describe('entities/CrushBlock', () => {

	it('creates an instance', () => {
		const inst = new CrushBlock();
		inst.name.should.equal('crushBlock');
	});

});