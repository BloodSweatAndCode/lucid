const Entity = require('../Entity');

/**
 * Creates a wire, which is implemented by the underlying C# class `Wire`.
 * @class
 * @extends Entity
 */
class Wire extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the wire
	 */
	constructor(data = {}) {
		return new Entity('wire', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Wire;