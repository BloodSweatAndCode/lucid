const Entity = require('../Entity');

/**
 * Creates a zipMover, which is implemented by the underlying C# classes `ZipMover`, `EntityID`.
 * @class
 * @extends Entity
 */
class ZipMover extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the zipMover
	 */
	constructor(data = {}) {
		return new Entity('zipMover', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ZipMover;