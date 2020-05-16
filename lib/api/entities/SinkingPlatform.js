const Entity = require('../Entity');

/**
 * Creates a sinkingPlatform, which is implemented by the underlying C# class `SinkingPlatform`.
 * @class
 * @extends Entity
 */
class SinkingPlatform extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the sinkingPlatform
	 */
	constructor(data = {}) {
		return new Entity('sinkingPlatform', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SinkingPlatform;