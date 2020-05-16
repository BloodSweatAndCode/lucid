const Entity = require('../Entity');

/**
 * Creates a cassetteBlock, which is implemented by the underlying C# classes `CassetteBlock`, `CassetteBlockManager`.
 * @class
 * @extends Entity
 */
class CassetteBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the cassetteBlock
	 */
	constructor(data = {}) {
		return new Entity('cassetteBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CassetteBlock;