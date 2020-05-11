const { Apply, Parallax } = require('../../../../lib/class');

describe('Apply', () => {

	describe('#constructor', () => {

		it('inits apply', () => {
			const data = { foo: 'bar' };
			const parallax = [];
			const apply = new Apply(data, parallax);
			apply.should.have.properties({
				data,
				parallax
			});
		});

	});

	describe('#toDict', () => {

		it('returns dictionary', () => {
			const data = { foo: 'bar' };
			const parallax = [ new Parallax({ hitman: 'fun' }) ];
			const apply = new Apply(data, parallax);
			apply.toDict().should.eql({
				foo: 'bar',
				__name: 'apply',
				__children: [
					{
						hitman: 'fun',
						__name: 'parallax'
					}
				]
			});
		});

	});

});