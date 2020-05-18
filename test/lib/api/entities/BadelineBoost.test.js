const BadelineBoost = require('../../../../lib/api/entities/BadelineBoost');

describe('entities/BadelineBoost', () => {

	it('creates an instance', () => {
		const inst = new BadelineBoost();
		inst.name.should.equal('badelineBoost');
	});

});