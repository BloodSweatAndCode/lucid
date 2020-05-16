const Entity = require('../Entity');

class WallSpringLeft extends Entity {
	/**
	 * Creates an instance of {@link WallSpringLeft}, which is implemented by the underlying C# class `Spring` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link WallSpringLeft} to be created
	 */
	constructor(data = {}) {
		return new Entity('wallSpringLeft', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = WallSpringLeft;