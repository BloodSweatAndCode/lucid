const Entity = require('../Entity');

/**
 * Creates a payphone, which is implemented by the underlying C# class `Payphone`.
 * @class
 * @extends Entity
 */
class Payphone extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the payphone
	 */
	constructor(data = {}) {
		return new Entity('payphone', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Payphone;