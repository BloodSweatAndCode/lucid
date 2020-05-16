const Entity = require('../Entity');

class RedBlocks extends Entity {
	/**
	 * Creates an instance of {@link RedBlocks}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link RedBlocks} to be created
	 */
	constructor(data = {}) {
		return new Entity('redBlocks', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = RedBlocks;