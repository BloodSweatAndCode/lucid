class Filler {
	/**
	 * Create an instance of Filler
	 * @constructor
	 * @param {Number} x - The x position of the filler.
	 * @param {Number} y - The y position of the filler.
	 * @param {Number} w - The width of the filler.
	 * @param {Number} h - The height of the filler.
	 * @example
	 * // creates a filler
	 * const { Filler } = require('lucid-dream');
	 * const filler = new Filler(20, 100, 10, 50);
	 */
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	/**
	 * Encode a filler into a dictionary
	 * @example
	 * // returns encoded filler dictionary
	 * const { Filler } = require('lucid-dream');
	 * const filler = new Filler(20, 100, 10, 50);
	 * filler.toDict();
	 * @returns {Object} An object containing the encoded filler dicitonary
	 */
	toDict() {
		const { x, y, w, h } = this;
		return { __name: 'rect', x, y, w, h };
	}
}

module.exports = Filler;