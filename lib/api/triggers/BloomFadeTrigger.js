const Entity = require('../Entity');

/**
 * Creates a bloomFadeTrigger, which is implemented by the underlying C# class `BloomFadeTrigger`.
 * @class
 * @extends Trigger
 */
class BloomFadeTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the bloomFadeTrigger
	 */
	constructor(data = {}) {
		return new Entity('bloomFadeTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = BloomFadeTrigger;