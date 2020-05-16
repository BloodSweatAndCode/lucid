// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a cliffflag, which is implemented by the underlying C# class `CliffFlags`.
 * @class
 * @extends Entity
 */
class Cliffflag extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the cliffflag
	 */
	constructor(data = {}) {
		return new Entity('cliffflag', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Cliffflag;