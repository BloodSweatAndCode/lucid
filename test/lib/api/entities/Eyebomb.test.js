const Eyebomb = require('../../../../lib/api/entities/Eyebomb');

describe('entities/Eyebomb', () => {

	it('creates an instance', () => {
		const inst = new Eyebomb();
		inst.name.should.equal('eyebomb');
	});

});