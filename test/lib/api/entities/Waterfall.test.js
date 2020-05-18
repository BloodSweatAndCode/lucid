const Waterfall = require('../../../../lib/api/entities/Waterfall');

describe('entities/Waterfall', () => {

	it('creates an instance', () => {
		const inst = new Waterfall();
		inst.name.should.equal('waterfall');
	});

});