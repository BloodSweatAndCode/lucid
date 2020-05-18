const Bridge = require('../../../../lib/api/entities/Bridge');

describe('entities/Bridge', () => {

	it('creates an instance', () => {
		const inst = new Bridge();
		inst.name.should.equal('bridge');
	});

});