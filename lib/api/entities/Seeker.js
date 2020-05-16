const Entity = require('../Entity');

/**
 * Creates a seeker, which is implemented by the underlying C# class `Seeker`.
 * @class
 * @extends Entity
 */
class Seeker extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the seeker
	 */
	constructor(data = {}) {
		return new Entity('seeker', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Seeker;