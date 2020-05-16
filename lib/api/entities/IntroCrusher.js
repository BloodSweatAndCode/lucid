const Entity = require('../Entity');

/**
 * Creates a introCrusher, which is implemented by the underlying C# class `IntroCrusher`.
 * @class
 * @extends Entity
 */
class IntroCrusher extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the introCrusher
	 */
	constructor(data = {}) {
		return new Entity('introCrusher', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = IntroCrusher;