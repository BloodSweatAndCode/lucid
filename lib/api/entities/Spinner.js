const Entity = require('../Entity');

/**
 * Creates a spinner, which is implemented by the underlying C# classes `DustStaticSpinner`, `CrystalStaticSpinner`.
 * @class
 * @extends Entity
 */
class Spinner extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the spinner
	 */
	constructor(data = {}) {
		return new Entity('spinner', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Spinner;