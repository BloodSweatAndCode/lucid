const Entity = require('../Entity');

/**
 * Creates a crumbleWallOnRumble, which is implemented by the underlying C# class `CrumbleWallOnRumble`.
 * @class
 * @extends Entity
 */
class CrumbleWallOnRumble extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the crumbleWallOnRumble
	 */
	constructor(data = {}) {
		return new Entity('crumbleWallOnRumble', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CrumbleWallOnRumble;