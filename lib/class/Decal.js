class Decal {
	/**
	 * Create an instance of Decal
	 * @constructor
	 * @param {String} texture - The texture name to be used for this decal.
	 * @param {Number} x - The x position of the decal.
	 * @param {Number} y - The y position of the decal.
	 * @param {Number} scaleX - The x scale of the decal.
	 * @param {Number} scaleY - The y scale of the decal.
	 * @example
	 * // creates a decal
	 * const { Decal } = require('lucid');
	 * const decal = new Decal('foo', 20, 100, 1, 1);
	 * @property {String} texture - The texture name of the decal.
	 * @property {Number} x - The x position of the decal.
	 * @property {Number} y - The y position of the decal.
	 * @property {Number} scaleX - The x scale of the decal.
	 * @property {Number} scaleY - The y scale of the decal.
	 */
	constructor(texture, x, y, scaleX, scaleY) {
		this.texture = texture;
		this.x = x;
		this.y = y;
		this.scaleX = scaleX;
		this.scaleY = scaleY;
	}

	/**
	 * Encode a decal into a dictionary
	 * @example
	 * // returns encoded decal dictionary
	 * const { Decal } = require('lucid');
	 * const decal = new Decal('foo', 20, 100, 1, 1);
	 * decal.toDict();
	 * @returns {Object} An object containing the encoded decal dicitonary
	 */
	toDict() {
		const { texture, x, y, scaleX, scaleY } = this;
		return { __name: 'decal', texture, x, y, scaleX, scaleY };
	}
}

module.exports = Decal;
