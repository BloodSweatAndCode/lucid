const Entity = require('../Entity');

class ZipMover extends Entity {
	/**
	 * Creates an instance of {@link ZipMover}, which is implemented by the underlying C# classes `ZipMover`, `EntityID` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link ZipMover} to be created
	 */
	constructor(data = {}) {
		return new Entity('zipMover', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ZipMover;