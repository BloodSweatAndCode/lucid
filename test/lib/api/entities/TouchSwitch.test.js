const TouchSwitch = require('../../../../lib/api/entities/TouchSwitch');

describe('entities/TouchSwitch', () => {

	it('creates an instance', () => {
		const inst = new TouchSwitch();
		inst.name.should.equal('touchSwitch');
	});

});