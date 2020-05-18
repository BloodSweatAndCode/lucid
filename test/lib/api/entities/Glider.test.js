const Glider = require('../../../../lib/api/entities/Glider');

describe('entities/Glider', () => {

	it('creates an instance', () => {
		const inst = new Glider();
		inst.name.should.equal('glider');
	});

});