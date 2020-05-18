const Cloud = require('../../../../lib/api/entities/Cloud');

describe('entities/Cloud', () => {

	it('creates an instance', () => {
		const inst = new Cloud();
		inst.name.should.equal('cloud');
	});

});