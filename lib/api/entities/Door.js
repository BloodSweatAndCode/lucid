const Entity = require('../Entity');

class Door extends Entity {
	/**
	 * Creates an instance of {@link Door}, which is implemented by the underlying C# class `Door` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Door} to be created
	 */
	constructor(data = {}) {
		return new Entity('door', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Door;