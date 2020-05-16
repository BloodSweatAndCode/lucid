const Entity = require('../Entity');

class DreamBlock extends Entity {
	/**
	 * Creates an instance of {@link DreamBlock}, which is implemented by the underlying C# class `DreamBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link DreamBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('dreamBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = DreamBlock;