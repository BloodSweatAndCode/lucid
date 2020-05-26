const DarkChaserEnd = require('../../../../lib/api/entities/DarkChaserEnd');

describe('entities/DarkChaserEnd', () => {

	it('creates an instance', () => {
		const inst = new DarkChaserEnd();
		inst.name.should.equal('darkChaserEnd');
	});

});