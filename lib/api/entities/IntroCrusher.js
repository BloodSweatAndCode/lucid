const Entity = require('../Entity');

class IntroCrusher extends Entity {
	/**
	 * Creates an instance of {@link IntroCrusher}, which is implemented by the underlying C# class `IntroCrusher` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link IntroCrusher} to be created
	 */
	constructor(data = {}) {
		return new Entity('introCrusher', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = IntroCrusher;