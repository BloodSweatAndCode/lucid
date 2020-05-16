const Entity = require('../Entity');

class TheoCrystal extends Entity {
	/**
	 * Creates an instance of {@link TheoCrystal}, which is implemented by the underlying C# class `TheoCrystal` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TheoCrystal} to be created
	 */
	constructor(data = {}) {
		return new Entity('theoCrystal', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TheoCrystal;