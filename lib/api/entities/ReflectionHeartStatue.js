const Entity = require('../Entity');

class ReflectionHeartStatue extends Entity {
	/**
	 * Creates an instance of {@link ReflectionHeartStatue}, which is implemented by the underlying C# class `ReflectionHeartStatue` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link ReflectionHeartStatue} to be created
	 */
	constructor(data = {}) {
		return new Entity('reflectionHeartStatue', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ReflectionHeartStatue;