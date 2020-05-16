const Entity = require('../Entity');

class Gondola extends Entity {
	/**
	 * Creates an instance of {@link Gondola}, which is implemented by the underlying C# class `Gondola` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Gondola} to be created
	 */
	constructor(data = {}) {
		return new Entity('gondola', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Gondola;