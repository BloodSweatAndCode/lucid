const FakeWall = require('../../../../lib/api/entities/FakeWall');

describe('entities/FakeWall', () => {

	it('creates an instance', () => {
		const inst = new FakeWall();
		inst.name.should.equal('fakeWall');
	});

});