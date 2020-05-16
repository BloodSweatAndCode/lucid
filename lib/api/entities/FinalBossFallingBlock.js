const Entity = require('../Entity');

class FinalBossFallingBlock extends Entity {
	/**
	 * Creates an instance of {@link FinalBossFallingBlock}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link FinalBossFallingBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('finalBossFallingBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FinalBossFallingBlock;