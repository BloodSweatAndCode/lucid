const MoonGlitchBackgroundTrigger = require('../../../../lib/api/triggers/MoonGlitchBackgroundTrigger');

describe('triggers/MoonGlitchBackgroundTrigger', () => {

	it('creates an instance', () => {
		const inst = new MoonGlitchBackgroundTrigger();
		inst.name.should.equal('moonGlitchBackgroundTrigger');
	});

});