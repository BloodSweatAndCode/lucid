const Water = require('../../../../lib/api/entities/Water');

describe('entities/Water', () => {

	it('creates an instance', () => {
		const inst = new Water();
		inst.name.should.equal('water');
	});

});