const Entity = require('../Entity');

/**
 * Creates a glassBlock, which is implemented by the underlying C# class `GlassBlock`.
 * @class
 * @extends Entity
 */
class GlassBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the glassBlock
	 */
	constructor(data = {}) {
		return new Entity('glassBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = GlassBlock;