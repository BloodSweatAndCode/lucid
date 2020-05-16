// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a tentacles, which is implemented by the underlying C# class `ReflectionTentacles`.
 * @class
 * @extends Entity
 */
class Tentacles extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the tentacles
	 */
	constructor(data = {}) {
		return new Entity('tentacles', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Tentacles;