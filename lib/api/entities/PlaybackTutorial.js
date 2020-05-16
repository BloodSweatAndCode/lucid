const Entity = require('../Entity');

class PlaybackTutorial extends Entity {
	/**
	 * Creates an instance of {@link PlaybackTutorial}, which is implemented by the underlying C# class `PlayerPlayback` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link PlaybackTutorial} to be created
	 */
	constructor(data = {}) {
		return new Entity('playbackTutorial', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = PlaybackTutorial;