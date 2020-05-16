// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a rotateSpinner, which is implemented by the underlying C# classes `StarRotateSpinner`, `DustRotateSpinner`, `BladeRotateSpinner`.
 * @class
 * @extends Entity
 */
class RotateSpinner extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the rotateSpinner
	 */
	constructor(data = {}) {
		return new Entity('rotateSpinner', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = RotateSpinner;