const CrumbleWallOnRumble = require('../../../../lib/api/entities/CrumbleWallOnRumble');

describe('entities/CrumbleWallOnRumble', () => {

	it('creates an instance', () => {
		const inst = new CrumbleWallOnRumble();
		inst.name.should.equal('crumbleWallOnRumble');
	});

});