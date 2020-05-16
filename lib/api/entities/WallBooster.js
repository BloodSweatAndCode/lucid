const Entity = require('../Entity');

class WallBooster extends Entity {
	/**
	 * Creates an instance of {@link WallBooster}, which is implemented by the underlying C# class `WallBooster` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link WallBooster} to be created
	 */
	constructor(data = {}) {
		return new Entity('wallBooster', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = WallBooster;