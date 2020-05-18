const Summitcloud = require('../../../../lib/api/entities/Summitcloud');

describe('entities/Summitcloud', () => {

	it('creates an instance', () => {
		const inst = new Summitcloud();
		inst.name.should.equal('summitcloud');
	});

});