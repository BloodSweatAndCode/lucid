const Resortmirror = require('../../../../lib/api/entities/Resortmirror');

describe('entities/Resortmirror', () => {

	it('creates an instance', () => {
		const inst = new Resortmirror();
		inst.name.should.equal('resortmirror');
	});

});