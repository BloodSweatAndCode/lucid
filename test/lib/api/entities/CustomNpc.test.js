const CustomNpc = require('../../../../lib/api/entities/CustomNpc');

describe('entities/CustomNpc', () => {

	it('creates an instance', () => {
		const inst = new CustomNpc();
		inst.name.should.equal('customNpc');
	});

});