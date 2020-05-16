const Entity = require('../Entity');

/**
 * Creates a summitgem, which is implemented by the underlying C# class `SummitGem`.
 * @class
 * @extends Entity
 */
class Summitgem extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the summitgem
	 */
	constructor(data = {}) {
		return new Entity('summitgem', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Summitgem;