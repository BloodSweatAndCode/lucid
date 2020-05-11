const { Filler } = require('../../../lib/class');

describe('Filler', () => {

	describe('#constructor', () => {

		it('inits filler', () => {
			const decal = new Filler(12, 34, 100, 10);
			decal.should.have.properties({
				__name: 'rect',
				x: 12,
				y: 34,
				w: 100,
				h: 10
			});
		});

	});

	describe('#toDict', () => {

		it('returns dictionary', () => {
			new Filler(12, 34, 100, 10).toDict().should.eql({
				__name: 'rect',
				x: 12,
				y: 34,
				w: 100,
				h: 10
			});
		});

	});

});