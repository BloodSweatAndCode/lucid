const Entity = require('../Entity');

class CrumbleWallOnRumble extends Entity {
	/**
	 * Creates an instance of {@link CrumbleWallOnRumble}, which is implemented by the underlying C# class `CrumbleWallOnRumble` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CrumbleWallOnRumble} to be created
	 */
	constructor(data = {}) {
		return new Entity('crumbleWallOnRumble', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CrumbleWallOnRumble;