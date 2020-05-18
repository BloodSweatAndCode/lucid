const SummitGemManager = require('../../../../lib/api/entities/SummitGemManager');

describe('entities/SummitGemManager', () => {

	it('creates an instance', () => {
		const inst = new SummitGemManager();
		inst.name.should.equal('summitGemManager');
	});

});