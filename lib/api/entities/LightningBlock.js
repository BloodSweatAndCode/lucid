const Entity = require('../Entity');

class LightningBlock extends Entity {
	/**
	 * Creates an instance of {@link LightningBlock}, which is implemented by the underlying C# class `LightningBreakerBox` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link LightningBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('lightningBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = LightningBlock;