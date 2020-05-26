const EverestMemorial = require('../../../../lib/api/entities/EverestMemorial');

describe('entities/EverestMemorial', () => {

	it('creates an instance', () => {
		const inst = new EverestMemorial();
		inst.name.should.equal('everestMemorial');
	});

});