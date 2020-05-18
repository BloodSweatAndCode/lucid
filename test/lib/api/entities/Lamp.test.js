const Lamp = require('../../../../lib/api/entities/Lamp');

describe('entities/Lamp', () => {

	it('creates an instance', () => {
		const inst = new Lamp();
		inst.name.should.equal('lamp');
	});

});