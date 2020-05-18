const Towerviewer = require('../../../../lib/api/entities/Towerviewer');

describe('entities/Towerviewer', () => {

	it('creates an instance', () => {
		const inst = new Towerviewer();
		inst.name.should.equal('towerviewer');
	});

});