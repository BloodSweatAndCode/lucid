const Entity = require('../Entity');

class CameraTargetTrigger extends Entity {
	/**
	 * Creates an instance of {@link CameraTargetTrigger}, which is implemented by the underlying C# class `CameraTargetTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CameraTargetTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('cameraTargetTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = CameraTargetTrigger;