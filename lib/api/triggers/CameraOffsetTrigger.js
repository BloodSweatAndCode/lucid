const Entity = require('../Entity');

/**
 * Creates a cameraOffsetTrigger, which is implemented by the underlying C# class `CameraOffsetTrigger`.
 * @class
 * @extends Trigger
 */
class CameraOffsetTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the cameraOffsetTrigger
	 */
	constructor(data = {}) {
		return new Entity('cameraOffsetTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = CameraOffsetTrigger;