const Booster = require('../../../../lib/api/entities/Booster');

describe('entities/Booster', () => {

	it('creates an instance', () => {
		const inst = new Booster();
		inst.name.should.equal('booster');
	});

});