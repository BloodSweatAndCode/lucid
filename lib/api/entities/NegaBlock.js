const Entity = require('../Entity');

class NegaBlock extends Entity {
	/**
	 * Creates an instance of {@link NegaBlock}, which is implemented by the underlying C# class `NegaBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link NegaBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('negaBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = NegaBlock;