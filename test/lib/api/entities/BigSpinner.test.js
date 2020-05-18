const BigSpinner = require('../../../../lib/api/entities/BigSpinner');

describe('entities/BigSpinner', () => {

	it('creates an instance', () => {
		const inst = new BigSpinner();
		inst.name.should.equal('bigSpinner');
	});

});