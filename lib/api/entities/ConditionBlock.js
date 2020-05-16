const Entity = require('../Entity');

class ConditionBlock extends Entity {
	/**
	 * Creates an instance of {@link ConditionBlock}, which is implemented by the underlying C# classes `Exception`, `ExitBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link ConditionBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('conditionBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ConditionBlock;