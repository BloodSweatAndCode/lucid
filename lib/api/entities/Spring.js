const Entity = require('../Entity');

class Spring extends Entity {
	/**
	 * Creates an instance of {@link Spring}, which is implemented by the underlying C# class `Spring` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Spring} to be created
	 */
	constructor(data = {}) {
		return new Entity('spring', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Spring;