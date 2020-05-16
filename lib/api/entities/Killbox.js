// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a killbox, which is implemented by the underlying C# class `Killbox`.
 * @class
 * @extends Entity
 */
class Killbox extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the killbox
	 */
	constructor(data = {}) {
		return new Entity('killbox', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Killbox;