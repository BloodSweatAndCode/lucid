const Entity = require('../Entity');

class IceBlock extends Entity {
	/**
	 * Creates an instance of {@link IceBlock}, which is implemented by the underlying C# class `IceBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link IceBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('iceBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = IceBlock;