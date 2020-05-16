const Entity = require('../Entity');

/**
 * Creates a touchSwitch, which is implemented by the underlying C# class `TouchSwitch`.
 * @class
 * @extends Entity
 */
class TouchSwitch extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the touchSwitch
	 */
	constructor(data = {}) {
		return new Entity('touchSwitch', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TouchSwitch;