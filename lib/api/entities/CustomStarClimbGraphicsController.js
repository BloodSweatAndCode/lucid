const Entity = require('../Entity');

class CustomStarClimbGraphicsController extends Entity {
	/**
	 * Creates an instance of {@link CustomStarClimbGraphicsController}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CustomStarClimbGraphicsController} to be created
	 */
	constructor(data = {}) {
		return new Entity('customStarClimbGraphicsController', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CustomStarClimbGraphicsController;