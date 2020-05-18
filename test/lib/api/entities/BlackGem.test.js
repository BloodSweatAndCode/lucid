const BlackGem = require('../../../../lib/api/entities/BlackGem');

describe('entities/BlackGem', () => {

	it('creates an instance', () => {
		const inst = new BlackGem();
		inst.name.should.equal('blackGem');
	});

});