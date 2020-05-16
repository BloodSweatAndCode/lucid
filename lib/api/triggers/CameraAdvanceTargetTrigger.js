const Entity = require('../Entity');

/**
 * Creates a cameraAdvanceTargetTrigger, which is implemented by the underlying C# class `CameraAdvanceTargetTrigger`.
 * @class
 * @extends Trigger
 */
class CameraAdvanceTargetTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the cameraAdvanceTargetTrigger
	 */
	constructor(data = {}) {
		return new Entity('cameraAdvanceTargetTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = CameraAdvanceTargetTrigger;