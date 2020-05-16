const Entity = require('../Entity');

class TrackSpinner extends Entity {
	/**
	 * Creates an instance of {@link TrackSpinner}, which is implemented by the underlying C# classes `StarTrackSpinner`, `DustTrackSpinner`, `BladeTrackSpinner` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TrackSpinner} to be created
	 */
	constructor(data = {}) {
		return new Entity('trackSpinner', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TrackSpinner;