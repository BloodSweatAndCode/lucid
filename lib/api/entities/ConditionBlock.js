const Entity = require('../Entity');

/**
 * Creates a conditionBlock, which is implemented by the underlying C# classes `Exception`, `ExitBlock`.
 * @class
 * @extends Entity
 */
class ConditionBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the conditionBlock
	 */
	constructor(data = {}) {
		return new Entity('conditionBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ConditionBlock;