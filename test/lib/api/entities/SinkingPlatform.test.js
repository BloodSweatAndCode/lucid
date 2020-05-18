const SinkingPlatform = require('../../../../lib/api/entities/SinkingPlatform');

describe('entities/SinkingPlatform', () => {

	it('creates an instance', () => {
		const inst = new SinkingPlatform();
		inst.name.should.equal('sinkingPlatform');
	});

});