const GoldenBerry = require('../../../../lib/api/entities/GoldenBerry');

describe('entities/GoldenBerry', () => {

	it('creates an instance', () => {
		const inst = new GoldenBerry();
		inst.name.should.equal('goldenBerry');
	});

});