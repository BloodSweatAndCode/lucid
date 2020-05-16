// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a movingPlatform, which is implemented by the underlying C# class `MovingPlatform`.
 * @class
 * @extends Entity
 */
class MovingPlatform extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the movingPlatform
	 */
	constructor(data = {}) {
		return new Entity('movingPlatform', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = MovingPlatform;