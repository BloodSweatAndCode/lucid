const Entity = require('../Entity');

/**
 * Creates a changeRespawnTrigger, which is implemented by the underlying C# class `ChangeRespawnTrigger`.
 * @class
 * @extends Trigger
 */
class ChangeRespawnTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the changeRespawnTrigger
	 */
	constructor(data = {}) {
		return new Entity('changeRespawnTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = ChangeRespawnTrigger;