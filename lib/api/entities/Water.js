const Entity = require('../Entity');

class Water extends Entity {
	/**
	 * Creates an instance of {@link Water}, which is implemented by the underlying C# class `Water` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Water} to be created
	 */
	constructor(data = {}) {
		return new Entity('water', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Water;