const CameraOffsetTrigger = require('../../../../lib/api/triggers/CameraOffsetTrigger');

describe('triggers/CameraOffsetTrigger', () => {

	it('creates an instance', () => {
		const inst = new CameraOffsetTrigger();
		inst.name.should.equal('cameraOffsetTrigger');
	});

});