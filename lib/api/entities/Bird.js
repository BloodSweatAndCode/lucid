const Entity = require('../Entity');

class Bird extends Entity {
	/**
	 * Creates an instance of {@link Bird}, which is implemented by the underlying C# class `BirdNPC` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Bird} to be created
	 */
	constructor(data = {}) {
		return new Entity('bird', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Bird;