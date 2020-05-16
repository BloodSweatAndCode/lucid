const Entity = require('../Entity');

/**
 * Creates a wallSpringLeft, which is implemented by the underlying C# class `Spring`.
 * @class
 * @extends Entity
 */
class WallSpringLeft extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the wallSpringLeft
	 */
	constructor(data = {}) {
		return new Entity('wallSpringLeft', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = WallSpringLeft;