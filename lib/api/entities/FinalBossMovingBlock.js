const Entity = require('../Entity');

class FinalBossMovingBlock extends Entity {
	/**
	 * Creates an instance of {@link FinalBossMovingBlock}, which is implemented by the underlying C# class `FinalBossMovingBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link FinalBossMovingBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('finalBossMovingBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FinalBossMovingBlock;