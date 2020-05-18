const FriendlyGhost = require('../../../../lib/api/entities/FriendlyGhost');

describe('entities/FriendlyGhost', () => {

	it('creates an instance', () => {
		const inst = new FriendlyGhost();
		inst.name.should.equal('friendlyGhost');
	});

});