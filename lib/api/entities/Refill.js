const Entity = require('../Entity');

class Refill extends Entity {
	/**
	 * Creates an instance of {@link Refill}, which is implemented by the underlying C# class `Refill` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Refill} to be created
	 */
	constructor(data = {}) {
		return new Entity('refill', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Refill;