const Entity = require('../Entity');

/**
 * Creates a interactTrigger, which is implemented by the underlying C# class `InteractTrigger`.
 * @class
 * @extends Trigger
 */
class InteractTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the interactTrigger
	 */
	constructor(data = {}) {
		return new Entity('interactTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = InteractTrigger;