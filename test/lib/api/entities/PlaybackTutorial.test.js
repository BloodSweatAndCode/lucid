const PlaybackTutorial = require('../../../../lib/api/entities/PlaybackTutorial');

describe('entities/PlaybackTutorial', () => {

	it('creates an instance', () => {
		const inst = new PlaybackTutorial();
		inst.name.should.equal('playbackTutorial');
	});

});