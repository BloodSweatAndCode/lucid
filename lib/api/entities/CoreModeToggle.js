const Entity = require('../Entity');

class CoreModeToggle extends Entity {
	/**
	 * Creates an instance of {@link CoreModeToggle}, which is implemented by the underlying C# class `CoreModeToggle` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CoreModeToggle} to be created
	 */
	constructor(data = {}) {
		return new Entity('coreModeToggle', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CoreModeToggle;