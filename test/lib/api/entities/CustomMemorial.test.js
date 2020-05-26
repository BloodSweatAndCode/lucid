const CustomMemorial = require('../../../../lib/api/entities/CustomMemorial');

describe('entities/CustomMemorial', () => {

	it('creates an instance', () => {
		const inst = new CustomMemorial();
		inst.name.should.equal('customMemorial');
	});

});