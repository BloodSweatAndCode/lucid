const Entity = require('../Entity');

class GreenBlocks extends Entity {
	/**
	 * Creates an instance of {@link GreenBlocks}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link GreenBlocks} to be created
	 */
	constructor(data = {}) {
		return new Entity('greenBlocks', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = GreenBlocks;