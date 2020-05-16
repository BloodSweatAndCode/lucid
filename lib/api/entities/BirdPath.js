const Entity = require('../Entity');

class BirdPath extends Entity {
	/**
	 * Creates an instance of {@link BirdPath}, which is implemented by the underlying C# class `BirdPath` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BirdPath} to be created
	 */
	constructor(data = {}) {
		return new Entity('birdPath', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BirdPath;