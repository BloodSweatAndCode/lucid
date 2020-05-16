const Entity = require('../Entity');

class Hahaha extends Entity {
	/**
	 * Creates an instance of {@link Hahaha}, which is implemented by the underlying C# class `Hahaha` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Hahaha} to be created
	 */
	constructor(data = {}) {
		return new Entity('hahaha', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Hahaha;