const Entity = require('../Entity');

class RotateSpinner extends Entity {
	/**
	 * Creates an instance of {@link RotateSpinner}, which is implemented by the underlying C# classes `StarRotateSpinner`, `DustRotateSpinner`, `BladeRotateSpinner` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link RotateSpinner} to be created
	 */
	constructor(data = {}) {
		return new Entity('rotateSpinner', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = RotateSpinner;