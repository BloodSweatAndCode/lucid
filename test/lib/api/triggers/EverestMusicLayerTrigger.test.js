const EverestMusicLayerTrigger = require('../../../../lib/api/triggers/EverestMusicLayerTrigger');

describe('triggers/EverestMusicLayerTrigger', () => {

	it('creates an instance', () => {
		const inst = new EverestMusicLayerTrigger();
		inst.name.should.equal('everestMusicLayerTrigger');
	});

});