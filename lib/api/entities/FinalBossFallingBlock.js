const Entity = require('../Entity');

/**
 * Creates a finalBossFallingBlock, which is implemented by the underlying C# class .
 * @class
 * @extends Entity
 */
class FinalBossFallingBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the finalBossFallingBlock
	 */
	constructor(data = {}) {
		return new Entity('finalBossFallingBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FinalBossFallingBlock;