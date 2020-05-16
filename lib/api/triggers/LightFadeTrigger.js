const Entity = require('../Entity');

/**
 * Creates a lightFadeTrigger, which is implemented by the underlying C# class `LightFadeTrigger`.
 * @class
 * @extends Trigger
 */
class LightFadeTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the lightFadeTrigger
	 */
	constructor(data = {}) {
		return new Entity('lightFadeTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = LightFadeTrigger;