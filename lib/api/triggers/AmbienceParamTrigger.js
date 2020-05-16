// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a ambienceParamTrigger, which is implemented by the underlying C# class `AmbienceParamTrigger`.
 * @class
 * @extends Trigger
 */
class AmbienceParamTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the ambienceParamTrigger
	 */
	constructor(data = {}) {
		return new Entity('ambienceParamTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = AmbienceParamTrigger;