const Entity = require('../Entity');

class RotatingPlatforms extends Entity {
	/**
	 * Creates an instance of {@link RotatingPlatforms}, which is implemented by the underlying C# class `RotatingPlatform` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link RotatingPlatforms} to be created
	 */
	constructor(data = {}) {
		return new Entity('rotatingPlatforms', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = RotatingPlatforms;