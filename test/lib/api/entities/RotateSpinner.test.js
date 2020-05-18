const RotateSpinner = require('../../../../lib/api/entities/RotateSpinner');

describe('entities/RotateSpinner', () => {

	it('creates an instance', () => {
		const inst = new RotateSpinner();
		inst.name.should.equal('rotateSpinner');
	});

});