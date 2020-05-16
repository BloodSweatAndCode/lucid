const Entity = require('../Entity');

class BigSpinner extends Entity {
	/**
	 * Creates an instance of {@link BigSpinner}, which is implemented by the underlying C# class `Bumper` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BigSpinner} to be created
	 */
	constructor(data = {}) {
		return new Entity('bigSpinner', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BigSpinner;