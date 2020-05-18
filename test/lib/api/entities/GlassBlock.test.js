const GlassBlock = require('../../../../lib/api/entities/GlassBlock');

describe('entities/GlassBlock', () => {

	it('creates an instance', () => {
		const inst = new GlassBlock();
		inst.name.should.equal('glassBlock');
	});

});