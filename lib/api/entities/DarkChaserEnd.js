const Entity = require('../Entity');

class DarkChaserEnd extends Entity {
	/**
	 * Creates an instance of {@link DarkChaserEnd}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link DarkChaserEnd} to be created
	 */
	constructor(data = {}) {
		return new Entity('darkChaserEnd', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = DarkChaserEnd;