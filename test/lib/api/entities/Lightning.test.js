const Lightning = require('../../../../lib/api/entities/Lightning');

describe('entities/Lightning', () => {

	it('creates an instance', () => {
		const inst = new Lightning();
		inst.name.should.equal('lightning');
	});

});