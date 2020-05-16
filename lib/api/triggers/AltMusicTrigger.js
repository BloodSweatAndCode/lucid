const Entity = require('../Entity');

class AltMusicTrigger extends Entity {
	/**
	 * Creates an instance of {@link AltMusicTrigger}, which is implemented by the underlying C# class `AltMusicTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link AltMusicTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('altMusicTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = AltMusicTrigger;