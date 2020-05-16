const Entity = require('../Entity');

/**
 * Creates a rotatingPlatforms, which is implemented by the underlying C# class `RotatingPlatform`.
 * @class
 * @extends Entity
 */
class RotatingPlatforms extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the rotatingPlatforms
	 */
	constructor(data = {}) {
		return new Entity('rotatingPlatforms', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = RotatingPlatforms;