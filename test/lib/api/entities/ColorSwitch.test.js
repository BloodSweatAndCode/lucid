const ColorSwitch = require('../../../../lib/api/entities/ColorSwitch');

describe('entities/ColorSwitch', () => {

	it('creates an instance', () => {
		const inst = new ColorSwitch();
		inst.name.should.equal('colorSwitch');
	});

});