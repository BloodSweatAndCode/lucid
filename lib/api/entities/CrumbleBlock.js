const Entity = require('../Entity');

/**
 * Creates a crumbleBlock, which is implemented by the underlying C# class `CrumblePlatform`.
 * @class
 * @extends Entity
 */
class CrumbleBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the crumbleBlock
	 */
	constructor(data = {}) {
		return new Entity('crumbleBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CrumbleBlock;