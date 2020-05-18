const BigWaterfall = require('../../../../lib/api/entities/BigWaterfall');

describe('entities/BigWaterfall', () => {

	it('creates an instance', () => {
		const inst = new BigWaterfall();
		inst.name.should.equal('bigWaterfall');
	});

});