const Lightbeam = require('../../../../lib/api/entities/Lightbeam');

describe('entities/Lightbeam', () => {

	it('creates an instance', () => {
		const inst = new Lightbeam();
		inst.name.should.equal('lightbeam');
	});

});