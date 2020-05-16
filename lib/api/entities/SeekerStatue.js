const Entity = require('../Entity');

class SeekerStatue extends Entity {
	/**
	 * Creates an instance of {@link SeekerStatue}, which is implemented by the underlying C# class `SeekerStatue` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link SeekerStatue} to be created
	 */
	constructor(data = {}) {
		return new Entity('seekerStatue', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SeekerStatue;