const Entity = require('../Entity');

class PlayerSeeker extends Entity {
	/**
	 * Creates an instance of {@link PlayerSeeker}, which is implemented by the underlying C# class `PlayerSeeker` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link PlayerSeeker} to be created
	 */
	constructor(data = {}) {
		return new Entity('playerSeeker', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = PlayerSeeker;