const Entity = require('../Entity');

/**
 * Creates a reflectionHeartStatue, which is implemented by the underlying C# class `ReflectionHeartStatue`.
 * @class
 * @extends Entity
 */
class ReflectionHeartStatue extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the reflectionHeartStatue
	 */
	constructor(data = {}) {
		return new Entity('reflectionHeartStatue', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ReflectionHeartStatue;