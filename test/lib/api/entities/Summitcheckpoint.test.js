const Summitcheckpoint = require('../../../../lib/api/entities/Summitcheckpoint');

describe('entities/Summitcheckpoint', () => {

	it('creates an instance', () => {
		const inst = new Summitcheckpoint();
		inst.name.should.equal('summitcheckpoint');
	});

});