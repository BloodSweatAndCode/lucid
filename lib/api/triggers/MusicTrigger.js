const Entity = require('../Entity');

/**
 * Creates a musicTrigger, which is implemented by the underlying C# class `MusicTrigger`.
 * @class
 * @extends Trigger
 */
class MusicTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the musicTrigger
	 */
	constructor(data = {}) {
		return new Entity('musicTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = MusicTrigger;