const BridgeFixed = require('../../../../lib/api/entities/BridgeFixed');

describe('entities/BridgeFixed', () => {

	it('creates an instance', () => {
		const inst = new BridgeFixed();
		inst.name.should.equal('bridgeFixed');
	});

});