// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a cloud, which is implemented by the underlying C# class `Cloud`.
 * @class
 * @extends Entity
 */
class Cloud extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the cloud
	 */
	constructor(data = {}) {
		return new Entity('cloud', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Cloud;