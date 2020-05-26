const CustomBirdTutorial = require('../../../../lib/api/entities/CustomBirdTutorial');

describe('entities/CustomBirdTutorial', () => {

	it('creates an instance', () => {
		const inst = new CustomBirdTutorial();
		inst.name.should.equal('customBirdTutorial');
	});

});