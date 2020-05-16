// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a lookoutBlocker, which is implemented by the underlying C# class `LookoutBlocker`.
 * @class
 * @extends Trigger
 */
class LookoutBlocker extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the lookoutBlocker
	 */
	constructor(data = {}) {
		return new Entity('lookoutBlocker', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = LookoutBlocker;