const Entity = require('../Entity');

class ExitBlock extends Entity {
	/**
	 * Creates an instance of {@link ExitBlock}, which is implemented by the underlying C# class `ExitBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link ExitBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('exitBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ExitBlock;