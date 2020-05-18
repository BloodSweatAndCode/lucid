const GoldenBerryCollectTrigger = require('../../../../lib/api/triggers/GoldenBerryCollectTrigger');

describe('triggers/GoldenBerryCollectTrigger', () => {

	it('creates an instance', () => {
		const inst = new GoldenBerryCollectTrigger();
		inst.name.should.equal('goldenBerryCollectTrigger');
	});

});