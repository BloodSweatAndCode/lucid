const Entity = require('../Entity');

class CameraOffsetTrigger extends Entity {
	/**
	 * Creates an instance of {@link CameraOffsetTrigger}, which is implemented by the underlying C# class `CameraOffsetTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CameraOffsetTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('cameraOffsetTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = CameraOffsetTrigger;