const GoldenBlock = require('../../../../lib/api/entities/GoldenBlock');

describe('entities/GoldenBlock', () => {

	it('creates an instance', () => {
		const inst = new GoldenBlock();
		inst.name.should.equal('goldenBlock');
	});

});