// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a foregroundDebris, which is implemented by the underlying C# class `ForegroundDebris`.
 * @class
 * @extends Entity
 */
class ForegroundDebris extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the foregroundDebris
	 */
	constructor(data = {}) {
		return new Entity('foregroundDebris', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ForegroundDebris;