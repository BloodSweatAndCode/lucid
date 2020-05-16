const Entity = require('../Entity');

class RisingLava extends Entity {
	/**
	 * Creates an instance of {@link RisingLava}, which is implemented by the underlying C# class `RisingLava` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link RisingLava} to be created
	 */
	constructor(data = {}) {
		return new Entity('risingLava', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = RisingLava;