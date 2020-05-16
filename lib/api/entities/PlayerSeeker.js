const Entity = require('../Entity');

/**
 * Creates a playerSeeker, which is implemented by the underlying C# class `PlayerSeeker`.
 * @class
 * @extends Entity
 */
class PlayerSeeker extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the playerSeeker
	 */
	constructor(data = {}) {
		return new Entity('playerSeeker', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = PlayerSeeker;