// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a cassette, which is implemented by the underlying C# class `Cassette`.
 * @class
 * @extends Entity
 */
class Cassette extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the cassette
	 */
	constructor(data = {}) {
		return new Entity('cassette', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Cassette;