const Entity = require('../Entity');

class Cloud extends Entity {
	/**
	 * Creates an instance of {@link Cloud}, which is implemented by the underlying C# class `Cloud` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Cloud} to be created
	 */
	constructor(data = {}) {
		return new Entity('cloud', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Cloud;