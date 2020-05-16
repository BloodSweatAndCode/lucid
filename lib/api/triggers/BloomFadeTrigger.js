const Entity = require('../Entity');

class BloomFadeTrigger extends Entity {
	/**
	 * Creates an instance of {@link BloomFadeTrigger}, which is implemented by the underlying C# class `BloomFadeTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BloomFadeTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('bloomFadeTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = BloomFadeTrigger;