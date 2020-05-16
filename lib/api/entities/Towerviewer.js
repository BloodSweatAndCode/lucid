const Entity = require('../Entity');

class Towerviewer extends Entity {
	/**
	 * Creates an instance of {@link Towerviewer}, which is implemented by the underlying C# class `Lookout` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Towerviewer} to be created
	 */
	constructor(data = {}) {
		return new Entity('towerviewer', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Towerviewer;