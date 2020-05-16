const Entity = require('../Entity');

/**
 * Creates a dashBlock, which is implemented by the underlying C# class `DashBlock`.
 * @class
 * @extends Entity
 */
class DashBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the dashBlock
	 */
	constructor(data = {}) {
		return new Entity('dashBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = DashBlock;