const AltMusicTrigger = require('../../../../lib/api/triggers/AltMusicTrigger');

describe('triggers/AltMusicTrigger', () => {

	it('creates an instance', () => {
		const inst = new AltMusicTrigger();
		inst.name.should.equal('altMusicTrigger');
	});

});