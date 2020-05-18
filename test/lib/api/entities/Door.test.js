const Door = require('../../../../lib/api/entities/Door');

describe('entities/Door', () => {

	it('creates an instance', () => {
		const inst = new Door();
		inst.name.should.equal('door');
	});

});