const Entity = require('../Entity');

class AmbienceParamTrigger extends Entity {
	/**
	 * Creates an instance of {@link AmbienceParamTrigger}, which is implemented by the underlying C# class `AmbienceParamTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link AmbienceParamTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('ambienceParamTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = AmbienceParamTrigger;