// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a badelineBoost, which is implemented by the underlying C# class `BadelineBoost`.
 * @class
 * @extends Entity
 */
class BadelineBoost extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the badelineBoost
	 */
	constructor(data = {}) {
		return new Entity('badelineBoost', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BadelineBoost;