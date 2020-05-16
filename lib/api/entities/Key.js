const Entity = require('../Entity');

class Key extends Entity {
	/**
	 * Creates an instance of {@link Key}, which is implemented by the underlying C# class `Key` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Key} to be created
	 */
	constructor(data = {}) {
		return new Entity('key', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Key;