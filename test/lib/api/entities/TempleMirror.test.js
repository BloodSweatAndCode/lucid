const TempleMirror = require('../../../../lib/api/entities/TempleMirror');

describe('entities/TempleMirror', () => {

	it('creates an instance', () => {
		const inst = new TempleMirror();
		inst.name.should.equal('templeMirror');
	});

});