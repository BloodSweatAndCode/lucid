const Strawberry = require('../../../../lib/api/entities/Strawberry');

describe('entities/Strawberry', () => {

	it('creates an instance', () => {
		const inst = new Strawberry();
		inst.name.should.equal('strawberry');
	});

});