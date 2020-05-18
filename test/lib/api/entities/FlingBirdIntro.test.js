const FlingBirdIntro = require('../../../../lib/api/entities/FlingBirdIntro');

describe('entities/FlingBirdIntro', () => {

	it('creates an instance', () => {
		const inst = new FlingBirdIntro();
		inst.name.should.equal('flingBirdIntro');
	});

});