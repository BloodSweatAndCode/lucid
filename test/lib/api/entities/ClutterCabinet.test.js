const ClutterCabinet = require('../../../../lib/api/entities/ClutterCabinet');

describe('entities/ClutterCabinet', () => {

	it('creates an instance', () => {
		const inst = new ClutterCabinet();
		inst.name.should.equal('clutterCabinet');
	});

});