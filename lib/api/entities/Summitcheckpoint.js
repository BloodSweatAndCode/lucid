const Entity = require('../Entity');

/**
 * Creates a summitcheckpoint, which is implemented by the underlying C# class `SummitCheckpoint`.
 * @class
 * @extends Entity
 */
class Summitcheckpoint extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the summitcheckpoint
	 */
	constructor(data = {}) {
		return new Entity('summitcheckpoint', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Summitcheckpoint;