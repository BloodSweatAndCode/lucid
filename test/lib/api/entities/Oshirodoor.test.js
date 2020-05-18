const Oshirodoor = require('../../../../lib/api/entities/Oshirodoor');

describe('entities/Oshirodoor', () => {

	it('creates an instance', () => {
		const inst = new Oshirodoor();
		inst.name.should.equal('oshirodoor');
	});

});