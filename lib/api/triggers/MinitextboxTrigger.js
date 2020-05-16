// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a minitextboxTrigger, which is implemented by the underlying C# class `MiniTextboxTrigger`.
 * @class
 * @extends Trigger
 */
class MinitextboxTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the minitextboxTrigger
	 */
	constructor(data = {}) {
		return new Entity('minitextboxTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = MinitextboxTrigger;