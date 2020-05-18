const Cobweb = require('../../../../lib/api/entities/Cobweb');

describe('entities/Cobweb', () => {

	it('creates an instance', () => {
		const inst = new Cobweb();
		inst.name.should.equal('cobweb');
	});

});