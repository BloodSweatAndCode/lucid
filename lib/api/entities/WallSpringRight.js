const Entity = require('../Entity');

/**
 * Creates a wallSpringRight, which is implemented by the underlying C# class `Spring`.
 * @class
 * @extends Entity
 */
class WallSpringRight extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the wallSpringRight
	 */
	constructor(data = {}) {
		return new Entity('wallSpringRight', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = WallSpringRight;