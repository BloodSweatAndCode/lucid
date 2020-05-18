const ClutterDoor = require('../../../../lib/api/entities/ClutterDoor');

describe('entities/ClutterDoor', () => {

	it('creates an instance', () => {
		const inst = new ClutterDoor();
		inst.name.should.equal('clutterDoor');
	});

});