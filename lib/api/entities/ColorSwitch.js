// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a colorSwitch, which is implemented by the underlying C# class `ClutterSwitch`.
 * @class
 * @extends Entity
 */
class ColorSwitch extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the colorSwitch
	 */
	constructor(data = {}) {
		return new Entity('colorSwitch', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ColorSwitch;