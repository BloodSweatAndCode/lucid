const Entity = require('../Entity');

class CassetteBlock extends Entity {
	/**
	 * Creates an instance of {@link CassetteBlock}, which is implemented by the underlying C# classes `CassetteBlock`, `CassetteBlockManager` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CassetteBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('cassetteBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CassetteBlock;