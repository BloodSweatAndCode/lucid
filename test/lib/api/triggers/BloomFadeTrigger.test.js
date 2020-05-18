const BloomFadeTrigger = require('../../../../lib/api/triggers/BloomFadeTrigger');

describe('triggers/BloomFadeTrigger', () => {

	it('creates an instance', () => {
		const inst = new BloomFadeTrigger();
		inst.name.should.equal('bloomFadeTrigger');
	});

});