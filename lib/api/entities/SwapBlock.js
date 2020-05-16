const Entity = require('../Entity');

class SwapBlock extends Entity {
	/**
	 * Creates an instance of {@link SwapBlock}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link SwapBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('swapBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SwapBlock;