const Entity = require('../Entity');

class FloatySpaceBlock extends Entity {
	/**
	 * Creates an instance of {@link FloatySpaceBlock}, which is implemented by the underlying C# class `FloatySpaceBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link FloatySpaceBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('floatySpaceBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FloatySpaceBlock;