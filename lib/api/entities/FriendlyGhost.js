const Entity = require('../Entity');

class FriendlyGhost extends Entity {
	/**
	 * Creates an instance of {@link FriendlyGhost}, which is implemented by the underlying C# class `AngryOshiro` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link FriendlyGhost} to be created
	 */
	constructor(data = {}) {
		return new Entity('friendlyGhost', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FriendlyGhost;