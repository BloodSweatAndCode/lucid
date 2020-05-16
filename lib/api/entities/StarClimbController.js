const Entity = require('../Entity');

/**
 * Creates a starClimbController, which is implemented by the underlying C# class `StarJumpController`.
 * @class
 * @extends Entity
 */
class StarClimbController extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the starClimbController
	 */
	constructor(data = {}) {
		return new Entity('starClimbController', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = StarClimbController;