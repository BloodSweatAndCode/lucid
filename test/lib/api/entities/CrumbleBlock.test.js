const CrumbleBlock = require('../../../../lib/api/entities/CrumbleBlock');

describe('entities/CrumbleBlock', () => {

	it('creates an instance', () => {
		const inst = new CrumbleBlock();
		inst.name.should.equal('crumbleBlock');
	});

});