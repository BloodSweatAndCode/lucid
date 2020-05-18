const Summitgem = require('../../../../lib/api/entities/Summitgem');

describe('entities/Summitgem', () => {

	it('creates an instance', () => {
		const inst = new Summitgem();
		inst.name.should.equal('summitgem');
	});

});