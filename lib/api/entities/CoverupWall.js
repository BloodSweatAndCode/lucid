const Entity = require('../Entity');

/**
 * Creates a coverupWall, which is implemented by the underlying C# class `CoverupWall`.
 * @class
 * @extends Entity
 */
class CoverupWall extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the coverupWall
	 */
	constructor(data = {}) {
		return new Entity('coverupWall', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CoverupWall;