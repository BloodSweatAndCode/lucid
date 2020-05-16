// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a templeEye, which is implemented by the underlying C# class `TempleEye`.
 * @class
 * @extends Entity
 */
class TempleEye extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the templeEye
	 */
	constructor(data = {}) {
		return new Entity('templeEye', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TempleEye;