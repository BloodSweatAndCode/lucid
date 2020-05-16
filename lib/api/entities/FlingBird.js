const Entity = require('../Entity');

class FlingBird extends Entity {
	/**
	 * Creates an instance of {@link FlingBird}, which is implemented by the underlying C# class `FlingBird` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link FlingBird} to be created
	 */
	constructor(data = {}) {
		return new Entity('flingBird', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FlingBird;