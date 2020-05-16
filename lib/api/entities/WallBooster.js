// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a wallBooster, which is implemented by the underlying C# class `WallBooster`.
 * @class
 * @extends Entity
 */
class WallBooster extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the wallBooster
	 */
	constructor(data = {}) {
		return new Entity('wallBooster', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = WallBooster;