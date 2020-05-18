const MusicTrigger = require('../../../../lib/api/triggers/MusicTrigger');

describe('triggers/MusicTrigger', () => {

	it('creates an instance', () => {
		const inst = new MusicTrigger();
		inst.name.should.equal('musicTrigger');
	});

});