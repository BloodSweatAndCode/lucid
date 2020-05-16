// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a strawberry, which is implemented by the underlying C# class `Strawberry`.
 * @class
 * @extends Entity
 */
class Strawberry extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the strawberry
	 */
	constructor(data = {}) {
		return new Entity('strawberry', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Strawberry;