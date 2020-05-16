const Entity = require('../Entity');

/**
 * Creates a windAttackTrigger, which is implemented by the underlying C# class `WindAttackTrigger`.
 * @class
 * @extends Trigger
 */
class WindAttackTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the windAttackTrigger
	 */
	constructor(data = {}) {
		return new Entity('windAttackTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = WindAttackTrigger;