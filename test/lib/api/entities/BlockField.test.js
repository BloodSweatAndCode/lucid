const BlockField = require('../../../../lib/api/entities/BlockField');

describe('entities/BlockField', () => {

	it('creates an instance', () => {
		const inst = new BlockField();
		inst.name.should.equal('blockField');
	});

});