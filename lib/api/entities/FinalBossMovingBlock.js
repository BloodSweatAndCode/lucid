const Entity = require('../Entity');

/**
 * Creates a finalBossMovingBlock, which is implemented by the underlying C# class `FinalBossMovingBlock`.
 * @class
 * @extends Entity
 */
class FinalBossMovingBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the finalBossMovingBlock
	 */
	constructor(data = {}) {
		return new Entity('finalBossMovingBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FinalBossMovingBlock;