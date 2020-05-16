const Entity = require('../Entity');

class Wire extends Entity {
	/**
	 * Creates an instance of {@link Wire}, which is implemented by the underlying C# class `Wire` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Wire} to be created
	 */
	constructor(data = {}) {
		return new Entity('wire', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Wire;