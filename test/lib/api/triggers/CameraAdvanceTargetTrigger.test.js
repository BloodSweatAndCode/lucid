const CameraAdvanceTargetTrigger = require('../../../../lib/api/triggers/CameraAdvanceTargetTrigger');

describe('triggers/CameraAdvanceTargetTrigger', () => {

	it('creates an instance', () => {
		const inst = new CameraAdvanceTargetTrigger();
		inst.name.should.equal('cameraAdvanceTargetTrigger');
	});

});