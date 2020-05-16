const Entity = require('../Entity');

/**
 * Creates a moonGlitchBackgroundTrigger, which is implemented by the underlying C# class `MoonGlitchBackgroundTrigger`.
 * @class
 * @extends Trigger
 */
class MoonGlitchBackgroundTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the moonGlitchBackgroundTrigger
	 */
	constructor(data = {}) {
		return new Entity('moonGlitchBackgroundTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = MoonGlitchBackgroundTrigger;