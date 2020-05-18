const Light = require('../../../../lib/api/entities/Light');

describe('entities/Light', () => {

	it('creates an instance', () => {
		const inst = new Light();
		inst.name.should.equal('light');
	});

});