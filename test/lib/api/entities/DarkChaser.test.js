const DarkChaser = require('../../../../lib/api/entities/DarkChaser');

describe('entities/DarkChaser', () => {

	it('creates an instance', () => {
		const inst = new DarkChaser();
		inst.name.should.equal('darkChaser');
	});

});