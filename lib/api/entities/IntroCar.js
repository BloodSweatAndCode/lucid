const Entity = require('../Entity');

class IntroCar extends Entity {
	/**
	 * Creates an instance of {@link IntroCar}, which is implemented by the underlying C# class `IntroCar` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link IntroCar} to be created
	 */
	constructor(data = {}) {
		return new Entity('introCar', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = IntroCar;