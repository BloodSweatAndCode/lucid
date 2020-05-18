const FakeHeart = require('../../../../lib/api/entities/FakeHeart');

describe('entities/FakeHeart', () => {

	it('creates an instance', () => {
		const inst = new FakeHeart();
		inst.name.should.equal('fakeHeart');
	});

});