class Style {
	/**
	 * Creates an instance of Style
	 * @constructor
	 * @param {Array} fg - An Array of foreground {@link Apply}, {@link Effect}, and {@link Parallax} instances.
	 * @param {Array} bg - An Array of background {@link Apply}, {@link Effect}, and {@link Parallax} instances.
	 * @example
	 * // creates a style
	 * const { Effect, Parallax, Style } = require('lucid-dream');
	 * const style = new Style([ new Effect('foo') ], [ new Parallax() ]);
	 * @property {Array} foregrounds - An Array of foreground {@link Apply}, {@link Effect}, and {@link Parallax} instances.
	 * @property {Array} backgrounds - An Array of background {@link Apply}, {@link Effect}, and {@link Parallax} instances.
	 */
	constructor(fg = [], bg = []) {
		this.foregrounds = fg;
		this.backgrounds = bg;
	}

	/**
	 * Encode a style into a dictionary
	 * @example
	 * // returns encoded style dictionary
	 * const { Effect, Parallax, Style } = require('lucid-dream');
	 * const style = new Style([ new Effect('foo') ], [ new Parallax() ]);
	 * style.toDict();
	 * @returns {Object} An object containing the encoded style dicitonary
	 */
	toDict() {
		return [
			{
				__name: 'Foregrounds',
				__children: this.foregrounds.map(f => f.toDict())
			},
			{
				__name: 'Backgrounds',
				__children: this.backgrounds.map(b => b.toDict())
			}
		];
	}
}

module.exports = Style;