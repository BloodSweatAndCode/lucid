// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a creditsTrigger, which is implemented by the underlying C# class `CreditsTrigger`.
 * @class
 * @extends Trigger
 */
class CreditsTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the creditsTrigger
	 */
	constructor(data = {}) {
		return new Entity('creditsTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = CreditsTrigger;