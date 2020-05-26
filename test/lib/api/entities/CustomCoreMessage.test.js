const CustomCoreMessage = require('../../../../lib/api/entities/CustomCoreMessage');

describe('entities/CustomCoreMessage', () => {

	it('creates an instance', () => {
		const inst = new CustomCoreMessage();
		inst.name.should.equal('customCoreMessage');
	});

});