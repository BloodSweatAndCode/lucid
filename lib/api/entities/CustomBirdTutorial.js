const Entity = require('../Entity');

class CustomBirdTutorial extends Entity {
	/**
	 * Creates an instance of {@link CustomBirdTutorial}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CustomBirdTutorial} to be created
	 */
	constructor(data = {}) {
		return new Entity('customBirdTutorial', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CustomBirdTutorial;