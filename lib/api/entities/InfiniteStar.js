const Entity = require('../Entity');

/**
 * Creates a infiniteStar, which is implemented by the underlying C# class `FlyFeather`.
 * @class
 * @extends Entity
 */
class InfiniteStar extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the infiniteStar
	 */
	constructor(data = {}) {
		return new Entity('infiniteStar', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = InfiniteStar;