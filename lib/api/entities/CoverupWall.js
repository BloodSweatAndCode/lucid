const Entity = require('../Entity');

class CoverupWall extends Entity {
	/**
	 * Creates an instance of {@link CoverupWall}, which is implemented by the underlying C# class `CoverupWall` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CoverupWall} to be created
	 */
	constructor(data = {}) {
		return new Entity('coverupWall', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CoverupWall;