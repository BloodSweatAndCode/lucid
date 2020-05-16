const Entity = require('../Entity');

class CrumbleBlock extends Entity {
	/**
	 * Creates an instance of {@link CrumbleBlock}, which is implemented by the underlying C# class `CrumblePlatform` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CrumbleBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('crumbleBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CrumbleBlock;