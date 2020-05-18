const TrackSpinner = require('../../../../lib/api/entities/TrackSpinner');

describe('entities/TrackSpinner', () => {

	it('creates an instance', () => {
		const inst = new TrackSpinner();
		inst.name.should.equal('trackSpinner');
	});

});