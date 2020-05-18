const Picoconsole = require('../../../../lib/api/entities/Picoconsole');

describe('entities/Picoconsole', () => {

	it('creates an instance', () => {
		const inst = new Picoconsole();
		inst.name.should.equal('picoconsole');
	});

});