// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a exitBlock, which is implemented by the underlying C# class `ExitBlock`.
 * @class
 * @extends Entity
 */
class ExitBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the exitBlock
	 */
	constructor(data = {}) {
		return new Entity('exitBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = ExitBlock;