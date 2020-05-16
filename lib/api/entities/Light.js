const Entity = require('../Entity');

class Light extends Entity {
	/**
	 * Creates an instance of {@link Light}, which is implemented by the underlying C# class `PropLight` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Light} to be created
	 */
	constructor(data = {}) {
		return new Entity('light', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Light;