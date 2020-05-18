const Memorial = require('../../../../lib/api/entities/Memorial');

describe('entities/Memorial', () => {

	it('creates an instance', () => {
		const inst = new Memorial();
		inst.name.should.equal('memorial');
	});

});