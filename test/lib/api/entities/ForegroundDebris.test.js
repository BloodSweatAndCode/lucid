const ForegroundDebris = require('../../../../lib/api/entities/ForegroundDebris');

describe('entities/ForegroundDebris', () => {

	it('creates an instance', () => {
		const inst = new ForegroundDebris();
		inst.name.should.equal('foregroundDebris');
	});

});