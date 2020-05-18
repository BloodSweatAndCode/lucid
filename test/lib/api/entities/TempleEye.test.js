const TempleEye = require('../../../../lib/api/entities/TempleEye');

describe('entities/TempleEye', () => {

	it('creates an instance', () => {
		const inst = new TempleEye();
		inst.name.should.equal('templeEye');
	});

});