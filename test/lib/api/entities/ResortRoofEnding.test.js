const ResortRoofEnding = require('../../../../lib/api/entities/ResortRoofEnding');

describe('entities/ResortRoofEnding', () => {

	it('creates an instance', () => {
		const inst = new ResortRoofEnding();
		inst.name.should.equal('resortRoofEnding');
	});

});