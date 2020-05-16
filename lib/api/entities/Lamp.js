const Entity = require('../Entity');

class Lamp extends Entity {
	/**
	 * Creates an instance of {@link Lamp}, which is implemented by the underlying C# class `Lamp` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Lamp} to be created
	 */
	constructor(data = {}) {
		return new Entity('lamp', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Lamp;