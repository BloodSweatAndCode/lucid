const Flutterbird = require('../../../../lib/api/entities/Flutterbird');

describe('entities/Flutterbird', () => {

	it('creates an instance', () => {
		const inst = new Flutterbird();
		inst.name.should.equal('flutterbird');
	});

});