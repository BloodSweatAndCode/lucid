const Entity = require('../Entity');

class Booster extends Entity {
	/**
	 * Creates an instance of {@link Booster}, which is implemented by the underlying C# class `Booster` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Booster} to be created
	 */
	constructor(data = {}) {
		return new Entity('booster', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Booster;