const Entity = require('../Entity');

/**
 * Creates a playbackBillboard, which is implemented by the underlying C# class `PlaybackBillboard`.
 * @class
 * @extends Entity
 */
class PlaybackBillboard extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the playbackBillboard
	 */
	constructor(data = {}) {
		return new Entity('playbackBillboard', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = PlaybackBillboard;