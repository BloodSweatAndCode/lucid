/**
 * @class
 * @property {Object} data - An object containing the attributes of the parallax.
 */
class Parallax {
	/**
	 * Creates an instance of Parallax
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes to define the parallax.
	 * @example
	 * // creates a parallax
	 * const { Parallax } = require('lucid-dream');
	 * const parallax = new Parallax();
	 */
	constructor(data = {}) {
		this.data = data;
	}

	/**
	 * Encode a parallax into a dictionary
	 * @example
	 * // returns encoded parallax dictionary
	 * const { Parallax } = require('lucid-dream');
	 * const parallax = new Parallax();
	 * parallax.toDict();
	 * @returns {Object} An object containing the encoded parallax dicitonary
	 */
	toDict() {
		const res = Object.assign({}, this.data);
		res.__name = 'parallax';
		return res;
	}
}

module.exports = Parallax;