const Entity = require('../Entity');

class StarClimbController extends Entity {
	/**
	 * Creates an instance of {@link StarClimbController}, which is implemented by the underlying C# class `StarJumpController` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link StarClimbController} to be created
	 */
	constructor(data = {}) {
		return new Entity('starClimbController', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = StarClimbController;