const WallBooster = require('../../../../lib/api/entities/WallBooster');

describe('entities/WallBooster', () => {

	it('creates an instance', () => {
		const inst = new WallBooster();
		inst.name.should.equal('wallBooster');
	});

});