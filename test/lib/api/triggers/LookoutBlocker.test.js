const LookoutBlocker = require('../../../../lib/api/triggers/LookoutBlocker');

describe('triggers/LookoutBlocker', () => {

	it('creates an instance', () => {
		const inst = new LookoutBlocker();
		inst.name.should.equal('lookoutBlocker');
	});

});