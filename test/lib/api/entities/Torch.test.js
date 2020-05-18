const Torch = require('../../../../lib/api/entities/Torch');

describe('entities/Torch', () => {

	it('creates an instance', () => {
		const inst = new Torch();
		inst.name.should.equal('torch');
	});

});