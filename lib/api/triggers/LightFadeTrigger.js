const Entity = require('../Entity');

class LightFadeTrigger extends Entity {
	/**
	 * Creates an instance of {@link LightFadeTrigger}, which is implemented by the underlying C# class `LightFadeTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link LightFadeTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('lightFadeTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = LightFadeTrigger;