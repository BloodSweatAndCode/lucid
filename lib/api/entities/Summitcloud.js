const Entity = require('../Entity');

/**
 * Creates a summitcloud, which is implemented by the underlying C# class `SummitCloud`.
 * @class
 * @extends Entity
 */
class Summitcloud extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the summitcloud
	 */
	constructor(data = {}) {
		return new Entity('summitcloud', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Summitcloud;