const Entity = require('../Entity');

/**
 * Creates a flingBird, which is implemented by the underlying C# class `FlingBird`.
 * @class
 * @extends Entity
 */
class FlingBird extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the flingBird
	 */
	constructor(data = {}) {
		return new Entity('flingBird', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FlingBird;