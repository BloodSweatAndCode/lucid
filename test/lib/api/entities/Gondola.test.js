const Gondola = require('../../../../lib/api/entities/Gondola');

describe('entities/Gondola', () => {

	it('creates an instance', () => {
		const inst = new Gondola();
		inst.name.should.equal('gondola');
	});

});