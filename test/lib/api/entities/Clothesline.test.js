const Clothesline = require('../../../../lib/api/entities/Clothesline');

describe('entities/Clothesline', () => {

	it('creates an instance', () => {
		const inst = new Clothesline();
		inst.name.should.equal('clothesline');
	});

});