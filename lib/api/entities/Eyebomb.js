const Entity = require('../Entity');

class Eyebomb extends Entity {
	/**
	 * Creates an instance of {@link Eyebomb}, which is implemented by the underlying C# class `Puffer` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Eyebomb} to be created
	 */
	constructor(data = {}) {
		return new Entity('eyebomb', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Eyebomb;