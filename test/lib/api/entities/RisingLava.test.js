const RisingLava = require('../../../../lib/api/entities/RisingLava');

describe('entities/RisingLava', () => {

	it('creates an instance', () => {
		const inst = new RisingLava();
		inst.name.should.equal('risingLava');
	});

});