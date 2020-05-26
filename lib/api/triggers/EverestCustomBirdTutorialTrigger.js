const Entity = require('../Entity');

class EverestCustomBirdTutorialTrigger extends Entity {
	/**
	 * Creates an instance of {@link EverestCustomBirdTutorialTrigger}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link EverestCustomBirdTutorialTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('everestCustomBirdTutorialTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = EverestCustomBirdTutorialTrigger;