const Entity = require('../Entity');

/**
 * Creates a friendlyGhost, which is implemented by the underlying C# class `AngryOshiro`.
 * @class
 * @extends Entity
 */
class FriendlyGhost extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the friendlyGhost
	 */
	constructor(data = {}) {
		return new Entity('friendlyGhost', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FriendlyGhost;