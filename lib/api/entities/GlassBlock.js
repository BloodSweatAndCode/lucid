const Entity = require('../Entity');

class GlassBlock extends Entity {
	/**
	 * Creates an instance of {@link GlassBlock}, which is implemented by the underlying C# class `GlassBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link GlassBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('glassBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = GlassBlock;