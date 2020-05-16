const Entity = require('../Entity');

class WindAttackTrigger extends Entity {
	/**
	 * Creates an instance of {@link WindAttackTrigger}, which is implemented by the underlying C# class `WindAttackTrigger` in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link WindAttackTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('windAttackTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = WindAttackTrigger;