const Entity = require('../Entity');

class FinalBoss extends Entity {
	/**
	 * Creates an instance of {@link FinalBoss}, which is implemented by the underlying C# class `FinalBoss` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link FinalBoss} to be created
	 */
	constructor(data = {}) {
		return new Entity('finalBoss', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FinalBoss;