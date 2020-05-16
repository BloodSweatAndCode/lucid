// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a birdPathTrigger, which is implemented by the underlying C# class `BirdPathTrigger`.
 * @class
 * @extends Trigger
 */
class BirdPathTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the birdPathTrigger
	 */
	constructor(data = {}) {
		return new Entity('birdPathTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = BirdPathTrigger;