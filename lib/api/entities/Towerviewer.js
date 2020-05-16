const Entity = require('../Entity');

/**
 * Creates a towerviewer, which is implemented by the underlying C# class `Lookout`.
 * @class
 * @extends Entity
 */
class Towerviewer extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the towerviewer
	 */
	constructor(data = {}) {
		return new Entity('towerviewer', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = Towerviewer;