const Entity = require('../Entity');

/**
 * Creates a summitGemManager, which is implemented by the underlying C# class `SummitGemManager`.
 * @class
 * @extends Entity
 */
class SummitGemManager extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the summitGemManager
	 */
	constructor(data = {}) {
		return new Entity('summitGemManager', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SummitGemManager;