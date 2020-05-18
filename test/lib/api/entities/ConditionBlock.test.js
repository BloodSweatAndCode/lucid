const ConditionBlock = require('../../../../lib/api/entities/ConditionBlock');

describe('entities/ConditionBlock', () => {

	it('creates an instance', () => {
		const inst = new ConditionBlock();
		inst.name.should.equal('conditionBlock');
	});

});