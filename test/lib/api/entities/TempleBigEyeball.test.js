const TempleBigEyeball = require('../../../../lib/api/entities/TempleBigEyeball');

describe('entities/TempleBigEyeball', () => {

	it('creates an instance', () => {
		const inst = new TempleBigEyeball();
		inst.name.should.equal('templeBigEyeball');
	});

});