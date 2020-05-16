const Entity = require('../Entity');

class ColorSwitch extends Entity {
	/**
	 * Creates an instance of {@link ColorSwitch}, which is implemented by the underlying C# class `ClutterSwitch` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link ColorSwitch} to be created
	 */
	constructor(data = {}) {
		return new Entity('colorSwitch', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ColorSwitch;