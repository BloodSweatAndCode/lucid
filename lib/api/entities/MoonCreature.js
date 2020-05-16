const Entity = require('../Entity');

class MoonCreature extends Entity {
	/**
	 * Creates an instance of {@link MoonCreature}, which is implemented by the underlying C# class `MoonCreature` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link MoonCreature} to be created
	 */
	constructor(data = {}) {
		return new Entity('moonCreature', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = MoonCreature;