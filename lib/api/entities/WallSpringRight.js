const Entity = require('../Entity');

class WallSpringRight extends Entity {
	/**
	 * Creates an instance of {@link WallSpringRight}, which is implemented by the underlying C# class `Spring` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link WallSpringRight} to be created
	 */
	constructor(data = {}) {
		return new Entity('wallSpringRight', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = WallSpringRight;