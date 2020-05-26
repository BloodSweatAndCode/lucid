const EverestCoreModeTrigger = require('../../../../lib/api/triggers/EverestCoreModeTrigger');

describe('triggers/EverestCoreModeTrigger', () => {

	it('creates an instance', () => {
		const inst = new EverestCoreModeTrigger();
		inst.name.should.equal('everestCoreModeTrigger');
	});

});