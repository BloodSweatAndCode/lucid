const Entity = require('../Entity');

class MovingPlatform extends Entity {
	/**
	 * Creates an instance of {@link MovingPlatform}, which is implemented by the underlying C# class `MovingPlatform` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link MovingPlatform} to be created
	 */
	constructor(data = {}) {
		return new Entity('movingPlatform', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = MovingPlatform;