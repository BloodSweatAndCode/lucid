// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a booster, which is implemented by the underlying C# class `Booster`.
 * @class
 * @extends Entity
 */
class Booster extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the booster
	 */
	constructor(data = {}) {
		return new Entity('booster', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Booster;