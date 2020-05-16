const Entity = require('../Entity');

class CameraAdvanceTargetTrigger extends Entity {
	/**
	 * Creates an instance of {@link CameraAdvanceTargetTrigger}, which is implemented by the underlying C# class `CameraAdvanceTargetTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CameraAdvanceTargetTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('cameraAdvanceTargetTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = CameraAdvanceTargetTrigger;