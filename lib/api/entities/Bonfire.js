const Entity = require('../Entity');

class Bonfire extends Entity {
	/**
	 * Creates an instance of {@link Bonfire}, which is implemented by the underlying C# class `Bonfire` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Bonfire} to be created
	 */
	constructor(data = {}) {
		return new Entity('bonfire', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Bonfire;