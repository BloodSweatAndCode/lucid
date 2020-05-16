// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a playbackTutorial, which is implemented by the underlying C# class `PlayerPlayback`.
 * @class
 * @extends Entity
 */
class PlaybackTutorial extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the playbackTutorial
	 */
	constructor(data = {}) {
		return new Entity('playbackTutorial', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = PlaybackTutorial;