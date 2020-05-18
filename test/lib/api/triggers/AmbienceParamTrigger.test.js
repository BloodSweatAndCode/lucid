const AmbienceParamTrigger = require('../../../../lib/api/triggers/AmbienceParamTrigger');

describe('triggers/AmbienceParamTrigger', () => {

	it('creates an instance', () => {
		const inst = new AmbienceParamTrigger();
		inst.name.should.equal('ambienceParamTrigger');
	});

});