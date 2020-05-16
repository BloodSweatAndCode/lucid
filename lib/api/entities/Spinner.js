const Entity = require('../Entity');

class Spinner extends Entity {
	/**
	 * Creates an instance of {@link Spinner}, which is implemented by the underlying C# classes `DustStaticSpinner`, `CrystalStaticSpinner` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Spinner} to be created
	 */
	constructor(data = {}) {
		return new Entity('spinner', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Spinner;