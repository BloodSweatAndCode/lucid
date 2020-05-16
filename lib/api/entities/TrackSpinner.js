const Entity = require('../Entity');

/**
 * Creates a trackSpinner, which is implemented by the underlying C# classes `StarTrackSpinner`, `DustTrackSpinner`, `BladeTrackSpinner`.
 * @class
 * @extends Entity
 */
class TrackSpinner extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the trackSpinner
	 */
	constructor(data = {}) {
		return new Entity('trackSpinner', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TrackSpinner;