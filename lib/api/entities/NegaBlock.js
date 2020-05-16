// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a negaBlock, which is implemented by the underlying C# class `NegaBlock`.
 * @class
 * @extends Entity
 */
class NegaBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the negaBlock
	 */
	constructor(data = {}) {
		return new Entity('negaBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = NegaBlock;