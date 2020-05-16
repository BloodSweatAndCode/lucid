class Apply {
	/**
	 * Creates an instance of Apply
	 * @constructor
	 * @param {Object} data - An object containing the attributes to define the apply.
	 * @param {Array} parallax - An array of {Parallax} instances.
	 * @example
	 * // creates an Apply
	 * const { Apply, Parallax } = require('lucid-dream');
	 * const apply = new Apply({}, [ new Parallax() ]);
	 * @property {Object} data - An Object containing the attributes of the apply.
	 * @property {Array} parallax - An array of {@link Parallax} instances.
	 */
	constructor(data, parallax) {
		this.data = data;
		this.parallax = parallax;
	}

	/**
	 * Encode an Apply into a dictionary
	 * @example
	 * // returns encoded apply dictionary
	 * const { Apply } = require('lucid-dream');
	 * const apply = new Apply({}, [ new Parallax() ]);
	 * apply.toDict();
	 * @returns {Object} An object containing the encoded apply dicitonary
	 */
	toDict() {
		const res = Object.assign({}, this.data);
		res.__name = 'apply';
		res.__children = this.parallax.map(p => p.toDict());
		return res;
	}
}

module.exports = Apply;
