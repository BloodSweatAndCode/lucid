const Entity = require('../Entity');

class Cassette extends Entity {
	/**
	 * Creates an instance of {@link Cassette}, which is implemented by the underlying C# class `Cassette` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Cassette} to be created
	 */
	constructor(data = {}) {
		return new Entity('cassette', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Cassette;