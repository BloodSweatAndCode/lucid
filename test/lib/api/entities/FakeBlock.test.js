const FakeBlock = require('../../../../lib/api/entities/FakeBlock');

describe('entities/FakeBlock', () => {

	it('creates an instance', () => {
		const inst = new FakeBlock();
		inst.name.should.equal('fakeBlock');
	});

});