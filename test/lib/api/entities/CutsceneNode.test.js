const CutsceneNode = require('../../../../lib/api/entities/CutsceneNode');

describe('entities/CutsceneNode', () => {

	it('creates an instance', () => {
		const inst = new CutsceneNode();
		inst.name.should.equal('cutsceneNode');
	});

});