const BirdPathTrigger = require('../../../../lib/api/triggers/BirdPathTrigger');

describe('triggers/BirdPathTrigger', () => {

	it('creates an instance', () => {
		const inst = new BirdPathTrigger();
		inst.name.should.equal('birdPathTrigger');
	});

});