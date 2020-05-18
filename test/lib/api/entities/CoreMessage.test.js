const CoreMessage = require('../../../../lib/api/entities/CoreMessage');

describe('entities/CoreMessage', () => {

	it('creates an instance', () => {
		const inst = new CoreMessage();
		inst.name.should.equal('coreMessage');
	});

});