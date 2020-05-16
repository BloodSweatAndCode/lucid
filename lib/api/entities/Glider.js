const Entity = require('../Entity');

/**
 * Creates a glider, which is implemented by the underlying C# class `Glider`.
 * @class
 * @extends Entity
 */
class Glider extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the glider
	 */
	constructor(data = {}) {
		return new Entity('glider', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Glider;