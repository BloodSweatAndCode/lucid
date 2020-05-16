const Entity = require('../Entity');

/**
 * Creates a lightningBlock, which is implemented by the underlying C# class `LightningBreakerBox`.
 * @class
 * @extends Entity
 */
class LightningBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the lightningBlock
	 */
	constructor(data = {}) {
		return new Entity('lightningBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = LightningBlock;