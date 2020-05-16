const Entity = require('../Entity');

/**
 * Creates a dreammirror, which is implemented by the underlying C# class `DreamMirror`.
 * @class
 * @extends Entity
 */
class Dreammirror extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the dreammirror
	 */
	constructor(data = {}) {
		return new Entity('dreammirror', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Dreammirror;