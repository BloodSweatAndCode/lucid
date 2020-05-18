const MusicFadeTrigger = require('../../../../lib/api/triggers/MusicFadeTrigger');

describe('triggers/MusicFadeTrigger', () => {

	it('creates an instance', () => {
		const inst = new MusicFadeTrigger();
		inst.name.should.equal('musicFadeTrigger');
	});

});