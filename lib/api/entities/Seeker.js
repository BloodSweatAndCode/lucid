const Entity = require('../Entity');

class Seeker extends Entity {
	/**
	 * Creates an instance of {@link Seeker}, which is implemented by the underlying C# class `Seeker` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Seeker} to be created
	 */
	constructor(data = {}) {
		return new Entity('seeker', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Seeker;