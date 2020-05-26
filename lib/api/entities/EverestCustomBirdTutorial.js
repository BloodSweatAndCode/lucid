const Entity = require('../Entity');

class EverestCustomBirdTutorial extends Entity {
	/**
	 * Creates an instance of {@link EverestCustomBirdTutorial}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link EverestCustomBirdTutorial} to be created
	 */
	constructor(data = {}) {
		return new Entity('everestCustomBirdTutorial', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = EverestCustomBirdTutorial;