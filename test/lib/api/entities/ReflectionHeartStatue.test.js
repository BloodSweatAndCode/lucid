const ReflectionHeartStatue = require('../../../../lib/api/entities/ReflectionHeartStatue');

describe('entities/ReflectionHeartStatue', () => {

	it('creates an instance', () => {
		const inst = new ReflectionHeartStatue();
		inst.name.should.equal('reflectionHeartStatue');
	});

});