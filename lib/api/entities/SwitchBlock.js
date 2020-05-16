const Entity = require('../Entity');

class SwitchBlock extends Entity {
	/**
	 * Creates an instance of {@link SwitchBlock}, which is implemented by the underlying C# class `SwapBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link SwitchBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('switchBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SwitchBlock;