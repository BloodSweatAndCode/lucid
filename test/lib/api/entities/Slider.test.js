const Slider = require('../../../../lib/api/entities/Slider');

describe('entities/Slider', () => {

	it('creates an instance', () => {
		const inst = new Slider();
		inst.name.should.equal('slider');
	});

});