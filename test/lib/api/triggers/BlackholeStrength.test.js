const BlackholeStrength = require('../../../../lib/api/triggers/BlackholeStrength');

describe('triggers/BlackholeStrength', () => {

	it('creates an instance', () => {
		const inst = new BlackholeStrength();
		inst.name.should.equal('blackholeStrength');
	});

});