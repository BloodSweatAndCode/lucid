// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a cameraTargetTrigger, which is implemented by the underlying C# class `CameraTargetTrigger`.
 * @class
 * @extends Trigger
 */
class CameraTargetTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the cameraTargetTrigger
	 */
	constructor(data = {}) {
		return new Entity('cameraTargetTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = CameraTargetTrigger;