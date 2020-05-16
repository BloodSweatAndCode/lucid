const { Effect, Parallax, Style } = require('../../../lucid-dream');

describe('Style', () => {

	describe('#constructor', () => {

		it('inits style', () => {
			const style = new Style();
			style.should.have.properties({
				foregrounds: [],
				backgrounds: []
			});
		});

	});

	describe('#toDict', () => {

		it('returns dictionary', () => {
			const effect = new Effect('foo', { bar: 'quux' });
			const parallax = new Parallax({ getto: 'thechoppa' });
			const fg = [ effect ];
			const bg = [ parallax ];
			const style = new Style(fg, bg);
			style.toDict().should.eql([
				{
					__name: 'Foregrounds',
					__children: [ effect.toDict() ]
				},
				{
					__name: 'Backgrounds',
					__children: [ parallax.toDict() ]
				}
			]);
		});

	});

});