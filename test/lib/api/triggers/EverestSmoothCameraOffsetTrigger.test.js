const EverestSmoothCameraOffsetTrigger = require('../../../../lib/api/triggers/EverestSmoothCameraOffsetTrigger');

describe('triggers/EverestSmoothCameraOffsetTrigger', () => {

	it('creates an instance', () => {
		const inst = new EverestSmoothCameraOffsetTrigger();
		inst.name.should.equal('everestSmoothCameraOffsetTrigger');
	});

});