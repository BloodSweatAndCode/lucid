const Entity = require('../Entity');

class DetachFollowersTrigger extends Entity {
	/**
	 * Creates an instance of {@link DetachFollowersTrigger}, which is implemented by the underlying C# class `DetachStrawberryTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link DetachFollowersTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('detachFollowersTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = DetachFollowersTrigger;