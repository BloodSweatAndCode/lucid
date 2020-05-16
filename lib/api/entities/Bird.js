// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a bird, which is implemented by the underlying C# class `BirdNPC`.
 * @class
 * @extends Entity
 */
class Bird extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the bird
	 */
	constructor(data = {}) {
		return new Entity('bird', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Bird;