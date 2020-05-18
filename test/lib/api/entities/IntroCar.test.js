const IntroCar = require('../../../../lib/api/entities/IntroCar');

describe('entities/IntroCar', () => {

	it('creates an instance', () => {
		const inst = new IntroCar();
		inst.name.should.equal('introCar');
	});

});