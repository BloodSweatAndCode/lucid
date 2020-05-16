const Entity = require('../Entity');

class Tentacles extends Entity {
	/**
	 * Creates an instance of {@link Tentacles}, which is implemented by the underlying C# class `ReflectionTentacles` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Tentacles} to be created
	 */
	constructor(data = {}) {
		return new Entity('tentacles', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Tentacles;