// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a oshiroTrigger, which is implemented by the underlying C# class `OshiroTrigger`.
 * @class
 * @extends Trigger
 */
class OshiroTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the oshiroTrigger
	 */
	constructor(data = {}) {
		return new Entity('oshiroTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = OshiroTrigger;