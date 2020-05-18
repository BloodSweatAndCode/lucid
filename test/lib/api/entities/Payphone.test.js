const Payphone = require('../../../../lib/api/entities/Payphone');

describe('entities/Payphone', () => {

	it('creates an instance', () => {
		const inst = new Payphone();
		inst.name.should.equal('payphone');
	});

});