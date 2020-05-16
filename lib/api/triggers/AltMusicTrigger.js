const Entity = require('../Entity');

/**
 * Creates a altMusicTrigger, which is implemented by the underlying C# class `AltMusicTrigger`.
 * @class
 * @extends Trigger
 */
class AltMusicTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the altMusicTrigger
	 */
	constructor(data = {}) {
		return new Entity('altMusicTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = AltMusicTrigger;