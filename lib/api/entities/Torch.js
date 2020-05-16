const Entity = require('../Entity');

class Torch extends Entity {
	/**
	 * Creates an instance of {@link Torch}, which is implemented by the underlying C# class `Torch` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Torch} to be created
	 */
	constructor(data = {}) {
		return new Entity('torch', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Torch;