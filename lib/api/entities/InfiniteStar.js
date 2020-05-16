const Entity = require('../Entity');

class InfiniteStar extends Entity {
	/**
	 * Creates an instance of {@link InfiniteStar}, which is implemented by the underlying C# class `FlyFeather` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link InfiniteStar} to be created
	 */
	constructor(data = {}) {
		return new Entity('infiniteStar', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = InfiniteStar;