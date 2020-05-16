const Entity = require('../Entity');

class YellowBlocks extends Entity {
	/**
	 * Creates an instance of {@link YellowBlocks}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link YellowBlocks} to be created
	 */
	constructor(data = {}) {
		return new Entity('yellowBlocks', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = YellowBlocks;