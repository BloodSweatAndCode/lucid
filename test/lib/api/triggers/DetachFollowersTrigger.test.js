const DetachFollowersTrigger = require('../../../../lib/api/triggers/DetachFollowersTrigger');

describe('triggers/DetachFollowersTrigger', () => {

	it('creates an instance', () => {
		const inst = new DetachFollowersTrigger();
		inst.name.should.equal('detachFollowersTrigger');
	});

});