const SoundSource = require('../../../../lib/api/entities/SoundSource');

describe('entities/SoundSource', () => {

	it('creates an instance', () => {
		const inst = new SoundSource();
		inst.name.should.equal('soundSource');
	});

});