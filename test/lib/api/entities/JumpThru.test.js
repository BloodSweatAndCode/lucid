const JumpThru = require('../../../../lib/api/entities/JumpThru');

describe('entities/JumpThru', () => {

	it('creates an instance', () => {
		const inst = new JumpThru();
		inst.name.should.equal('jumpThru');
	});

});