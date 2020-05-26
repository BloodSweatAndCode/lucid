const EverestCustomBirdTutorialTrigger = require('../../../../lib/api/triggers/EverestCustomBirdTutorialTrigger');

describe('triggers/EverestCustomBirdTutorialTrigger', () => {

	it('creates an instance', () => {
		const inst = new EverestCustomBirdTutorialTrigger();
		inst.name.should.equal('everestCustomBirdTutorialTrigger');
	});

});