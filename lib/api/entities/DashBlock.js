const Entity = require('../Entity');

class DashBlock extends Entity {
	/**
	 * Creates an instance of {@link DashBlock}, which is implemented by the underlying C# class `DashBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link DashBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('dashBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = DashBlock;