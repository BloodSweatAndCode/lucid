const Entity = require('../Entity');

class PlaybackBillboard extends Entity {
	/**
	 * Creates an instance of {@link PlaybackBillboard}, which is implemented by the underlying C# class `PlaybackBillboard` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link PlaybackBillboard} to be created
	 */
	constructor(data = {}) {
		return new Entity('playbackBillboard', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = PlaybackBillboard;