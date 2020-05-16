// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a trapdoor, which is implemented by the underlying C# class `Trapdoor`.
 * @class
 * @extends Entity
 */
class Trapdoor extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the trapdoor
	 */
	constructor(data = {}) {
		return new Entity('trapdoor', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Trapdoor;