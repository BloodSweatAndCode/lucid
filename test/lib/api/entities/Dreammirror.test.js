const Dreammirror = require('../../../../lib/api/entities/Dreammirror');

describe('entities/Dreammirror', () => {

	it('creates an instance', () => {
		const inst = new Dreammirror();
		inst.name.should.equal('dreammirror');
	});

});