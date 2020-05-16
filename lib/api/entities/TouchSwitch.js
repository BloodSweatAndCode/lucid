const Entity = require('../Entity');

class TouchSwitch extends Entity {
	/**
	 * Creates an instance of {@link TouchSwitch}, which is implemented by the underlying C# class `TouchSwitch` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TouchSwitch} to be created
	 */
	constructor(data = {}) {
		return new Entity('touchSwitch', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TouchSwitch;