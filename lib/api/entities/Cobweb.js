const Entity = require('../Entity');

class Cobweb extends Entity {
	/**
	 * Creates an instance of {@link Cobweb}, which is implemented by the underlying C# class `Cobweb` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Cobweb} to be created
	 */
	constructor(data = {}) {
		return new Entity('cobweb', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Cobweb;