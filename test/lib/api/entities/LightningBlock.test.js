const LightningBlock = require('../../../../lib/api/entities/LightningBlock');

describe('entities/LightningBlock', () => {

	it('creates an instance', () => {
		const inst = new LightningBlock();
		inst.name.should.equal('lightningBlock');
	});

});