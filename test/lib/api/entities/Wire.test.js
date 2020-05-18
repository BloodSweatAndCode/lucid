const Wire = require('../../../../lib/api/entities/Wire');

describe('entities/Wire', () => {

	it('creates an instance', () => {
		const inst = new Wire();
		inst.name.should.equal('wire');
	});

});