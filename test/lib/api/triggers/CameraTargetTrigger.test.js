const CameraTargetTrigger = require('../../../../lib/api/triggers/CameraTargetTrigger');

describe('triggers/CameraTargetTrigger', () => {

	it('creates an instance', () => {
		const inst = new CameraTargetTrigger();
		inst.name.should.equal('cameraTargetTrigger');
	});

});