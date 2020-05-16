const Entity = require('../Entity');

class MusicFadeTrigger extends Entity {
	/**
	 * Creates an instance of {@link MusicFadeTrigger}, which is implemented by the underlying C# class `MusicFadeTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link MusicFadeTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('musicFadeTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = MusicFadeTrigger;