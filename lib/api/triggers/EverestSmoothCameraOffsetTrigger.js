const Entity = require('../Entity');

class EverestSmoothCameraOffsetTrigger extends Entity {
	/**
	 * Creates an instance of {@link EverestSmoothCameraOffsetTrigger}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link EverestSmoothCameraOffsetTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('everestSmoothCameraOffsetTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = EverestSmoothCameraOffsetTrigger;