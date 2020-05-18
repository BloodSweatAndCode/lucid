const MinitextboxTrigger = require('../../../../lib/api/triggers/MinitextboxTrigger');

describe('triggers/MinitextboxTrigger', () => {

	it('creates an instance', () => {
		const inst = new MinitextboxTrigger();
		inst.name.should.equal('minitextboxTrigger');
	});

});