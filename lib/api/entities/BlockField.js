const Entity = require('../Entity');

class BlockField extends Entity {
	/**
	 * Creates an instance of {@link BlockField}, which is implemented by the underlying C# class `BlockField` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BlockField} to be created
	 */
	constructor(data = {}) {
		return new Entity('blockField', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BlockField;