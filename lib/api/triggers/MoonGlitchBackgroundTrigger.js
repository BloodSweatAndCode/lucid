const Entity = require('../Entity');

class MoonGlitchBackgroundTrigger extends Entity {
	/**
	 * Creates an instance of {@link MoonGlitchBackgroundTrigger}, which is implemented by the underlying C# class `MoonGlitchBackgroundTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link MoonGlitchBackgroundTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('moonGlitchBackgroundTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = MoonGlitchBackgroundTrigger;