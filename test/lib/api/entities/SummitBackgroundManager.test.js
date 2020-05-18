const SummitBackgroundManager = require('../../../../lib/api/entities/SummitBackgroundManager');

describe('entities/SummitBackgroundManager', () => {

	it('creates an instance', () => {
		const inst = new SummitBackgroundManager();
		inst.name.should.equal('SummitBackgroundManager');
	});

});