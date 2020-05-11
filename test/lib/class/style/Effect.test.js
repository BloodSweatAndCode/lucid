const { Effect } = require('../../../../lib/class');

describe('Effect', () => {

	describe('#constructor', () => {

		it('inits effect', () => {
			const name = 'foo';
			const data = { bsac: 123 };
			const apply = new Effect(name, data);
			apply.should.have.properties({
				name,
				data
			});
		});

	});

	describe('#toDict', () => {

		it('returns dictionary', () => {
			const name = 'foo';
			const data = { bsac: 123 };
			const apply = new Effect(name, data);
			apply.toDict().should.eql({
				bsac: 123,
				__name: 'foo'
			});
		});

	});

});