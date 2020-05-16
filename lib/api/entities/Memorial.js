const Entity = require('../Entity');

class Memorial extends Entity {
	/**
	 * Creates an instance of {@link Memorial}, which is implemented by the underlying C# class `Memorial` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Memorial} to be created
	 */
	constructor(data = {}) {
		return new Entity('memorial', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Memorial;