// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a heartGemDoor, which is implemented by the underlying C# class `HeartGemDoor`.
 * @class
 * @extends Entity
 */
class HeartGemDoor extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the heartGemDoor
	 */
	constructor(data = {}) {
		return new Entity('heartGemDoor', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = HeartGemDoor;