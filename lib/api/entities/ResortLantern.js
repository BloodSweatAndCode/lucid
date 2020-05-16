const Entity = require('../Entity');

/**
 * Creates a resortLantern, which is implemented by the underlying C# class `ResortLantern`.
 * @class
 * @extends Entity
 */
class ResortLantern extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the resortLantern
	 */
	constructor(data = {}) {
		return new Entity('resortLantern', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ResortLantern;