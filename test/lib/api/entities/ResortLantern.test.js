const ResortLantern = require('../../../../lib/api/entities/ResortLantern');

describe('entities/ResortLantern', () => {

	it('creates an instance', () => {
		const inst = new ResortLantern();
		inst.name.should.equal('resortLantern');
	});

});