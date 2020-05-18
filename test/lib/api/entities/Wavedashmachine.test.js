const Wavedashmachine = require('../../../../lib/api/entities/Wavedashmachine');

describe('entities/Wavedashmachine', () => {

	it('creates an instance', () => {
		const inst = new Wavedashmachine();
		inst.name.should.equal('wavedashmachine');
	});

});