const SoundTest3D = require('../../../../lib/api/entities/SoundTest3D');

describe('entities/SoundTest3D', () => {

	it('creates an instance', () => {
		const inst = new SoundTest3D();
		inst.name.should.equal('SoundTest3d');
	});

});