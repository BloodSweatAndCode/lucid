const Entity = require('../Entity');

class SandwichLava extends Entity {
	/**
	 * Creates an instance of {@link SandwichLava}, which is implemented by the underlying C# class `SandwichLava` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link SandwichLava} to be created
	 */
	constructor(data = {}) {
		return new Entity('sandwichLava', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SandwichLava;