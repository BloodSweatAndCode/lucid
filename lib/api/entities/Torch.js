const Entity = require('../Entity');

/**
 * Creates a torch, which is implemented by the underlying C# class `Torch`.
 * @class
 * @extends Entity
 */
class Torch extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the torch
	 */
	constructor(data = {}) {
		return new Entity('torch', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Torch;