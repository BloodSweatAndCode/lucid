const Entity = require('../Entity');

class Glider extends Entity {
	/**
	 * Creates an instance of {@link Glider}, which is implemented by the underlying C# class `Glider` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Glider} to be created
	 */
	constructor(data = {}) {
		return new Entity('glider', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Glider;