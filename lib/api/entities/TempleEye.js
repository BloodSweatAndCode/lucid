const Entity = require('../Entity');

class TempleEye extends Entity {
	/**
	 * Creates an instance of {@link TempleEye}, which is implemented by the underlying C# class `TempleEye` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TempleEye} to be created
	 */
	constructor(data = {}) {
		return new Entity('templeEye', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TempleEye;