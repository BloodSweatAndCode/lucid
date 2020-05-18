const InfiniteStar = require('../../../../lib/api/entities/InfiniteStar');

describe('entities/InfiniteStar', () => {

	it('creates an instance', () => {
		const inst = new InfiniteStar();
		inst.name.should.equal('infiniteStar');
	});

});