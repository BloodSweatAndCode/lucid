const Entity = require('../Entity');

class Lightning extends Entity {
	/**
	 * Creates an instance of {@link Lightning}, which is implemented by the underlying C# class `Lightning` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Lightning} to be created
	 */
	constructor(data = {}) {
		return new Entity('lightning', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Lightning;