// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a detachFollowersTrigger, which is implemented by the underlying C# class `DetachStrawberryTrigger`.
 * @class
 * @extends Trigger
 */
class DetachFollowersTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the detachFollowersTrigger
	 */
	constructor(data = {}) {
		return new Entity('detachFollowersTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = DetachFollowersTrigger;