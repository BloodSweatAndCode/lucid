// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a cobweb, which is implemented by the underlying C# class `Cobweb`.
 * @class
 * @extends Entity
 */
class Cobweb extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the cobweb
	 */
	constructor(data = {}) {
		return new Entity('cobweb', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Cobweb;