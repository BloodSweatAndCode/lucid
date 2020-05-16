const Entity = require('../Entity');

class Trapdoor extends Entity {
	/**
	 * Creates an instance of {@link Trapdoor}, which is implemented by the underlying C# class `Trapdoor` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Trapdoor} to be created
	 */
	constructor(data = {}) {
		return new Entity('trapdoor', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Trapdoor;