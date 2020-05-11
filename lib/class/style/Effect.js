class Effect {
	/**
	 * Creates an instance of Effect.
	 * @constructor
	 * @param {String} name - The name of the effect.
	 * @param {Object} [data={}] - An object containing the attributes to define the effect.
	 * @example
	 * // creates an effect
	 * const { Effect } = require('lucid');
	 * const effect = new Effect('foo');
	 * @property {String} name - The name of the effect.
	 * @property {Object} data - An object containing the attributes of the effect.
	 */
	constructor(name, data = {}) {
		this.name = name;
		this.data = data;
	}

	/**
	 * Encode an effect into a dictionary
	 * @example
	 * // returns encoded effect dictionary
	 * const { Effect } = require('lucid');
	 * const effect = new Effect('foo', {});
	 * effect.toDict();
	 * @returns {Object} An object containing the encoded effect dicitonary
	 */
	toDict() {
		const res = Object.assign({}, this.data);
		res.__name = this.name;
		return res;
	}
}

module.exports = Effect;
