const Bird = require('../../../../lib/api/entities/Bird');

describe('entities/Bird', () => {

	it('creates an instance', () => {
		const inst = new Bird();
		inst.name.should.equal('bird');
	});

});