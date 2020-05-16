const { Decal } = require('../../../lucid-dream');

describe('Decal', () => {

	describe('#constructor', () => {

		it('inits decal', () => {
			const decal = new Decal('foo', 12, 34, 1, 1);
			decal.should.have.properties({
				texture: 'foo',
				x: 12,
				y: 34,
				scaleX: 1,
				scaleY: 1
			});
		});

	});

	describe('#toDict', () => {

		it('returns dictionary', () => {
			new Decal('foo', 12, 34, 1, 1).toDict().should.eql({
				__name: 'decal',
				texture: 'foo',
				x: 12,
				y: 34,
				scaleX: 1,
				scaleY: 1
			});
		});

	});

});