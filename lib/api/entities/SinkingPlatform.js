const Entity = require('../Entity');

class SinkingPlatform extends Entity {
	/**
	 * Creates an instance of {@link SinkingPlatform}, which is implemented by the underlying C# class `SinkingPlatform` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link SinkingPlatform} to be created
	 */
	constructor(data = {}) {
		return new Entity('sinkingPlatform', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SinkingPlatform;