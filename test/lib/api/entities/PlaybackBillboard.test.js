const PlaybackBillboard = require('../../../../lib/api/entities/PlaybackBillboard');

describe('entities/PlaybackBillboard', () => {

	it('creates an instance', () => {
		const inst = new PlaybackBillboard();
		inst.name.should.equal('playbackBillboard');
	});

});