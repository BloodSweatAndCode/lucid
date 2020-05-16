// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a hanginglamp, which is implemented by the underlying C# class `HangingLamp`.
 * @class
 * @extends Entity
 */
class Hanginglamp extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the hanginglamp
	 */
	constructor(data = {}) {
		return new Entity('hanginglamp', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Hanginglamp;