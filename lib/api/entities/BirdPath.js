// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a birdPath, which is implemented by the underlying C# class `BirdPath`.
 * @class
 * @extends Entity
 */
class BirdPath extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the birdPath
	 */
	constructor(data = {}) {
		return new Entity('birdPath', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BirdPath;