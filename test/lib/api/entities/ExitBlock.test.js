const ExitBlock = require('../../../../lib/api/entities/ExitBlock');

describe('entities/ExitBlock', () => {

	it('creates an instance', () => {
		const inst = new ExitBlock();
		inst.name.should.equal('exitBlock');
	});

});