const Entity = require('../Entity');

class Summitcheckpoint extends Entity {
	/**
	 * Creates an instance of {@link Summitcheckpoint}, which is implemented by the underlying C# class `SummitCheckpoint` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Summitcheckpoint} to be created
	 */
	constructor(data = {}) {
		return new Entity('summitcheckpoint', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Summitcheckpoint;