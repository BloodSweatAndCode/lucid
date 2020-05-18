const Spinner = require('../../../../lib/api/entities/Spinner');

describe('entities/Spinner', () => {

	it('creates an instance', () => {
		const inst = new Spinner();
		inst.name.should.equal('spinner');
	});

});