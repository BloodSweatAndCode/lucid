const LightFadeTrigger = require('../../../../lib/api/triggers/LightFadeTrigger');

describe('triggers/LightFadeTrigger', () => {

	it('creates an instance', () => {
		const inst = new LightFadeTrigger();
		inst.name.should.equal('lightFadeTrigger');
	});

});