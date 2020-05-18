const IntroCrusher = require('../../../../lib/api/entities/IntroCrusher');

describe('entities/IntroCrusher', () => {

	it('creates an instance', () => {
		const inst = new IntroCrusher();
		inst.name.should.equal('introCrusher');
	});

});