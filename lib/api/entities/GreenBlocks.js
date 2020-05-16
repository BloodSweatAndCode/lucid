const Entity = require('../Entity');

/**
 * Creates a greenBlocks, which is implemented by the underlying C# class .
 * @class
 * @extends Entity
 */
class GreenBlocks extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the greenBlocks
	 */
	constructor(data = {}) {
		return new Entity('greenBlocks', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = GreenBlocks;