const Entity = require('../Entity');

class Payphone extends Entity {
	/**
	 * Creates an instance of {@link Payphone}, which is implemented by the underlying C# class `Payphone` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Payphone} to be created
	 */
	constructor(data = {}) {
		return new Entity('payphone', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Payphone;