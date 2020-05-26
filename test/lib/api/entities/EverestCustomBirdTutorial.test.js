const EverestCustomBirdTutorial = require('../../../../lib/api/entities/EverestCustomBirdTutorial');

describe('entities/EverestCustomBirdTutorial', () => {

	it('creates an instance', () => {
		const inst = new EverestCustomBirdTutorial();
		inst.name.should.equal('everestCustomBirdTutorial');
	});

});