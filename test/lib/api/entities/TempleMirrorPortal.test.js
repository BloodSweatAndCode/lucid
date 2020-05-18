const TempleMirrorPortal = require('../../../../lib/api/entities/TempleMirrorPortal');

describe('entities/TempleMirrorPortal', () => {

	it('creates an instance', () => {
		const inst = new TempleMirrorPortal();
		inst.name.should.equal('templeMirrorPortal');
	});

});