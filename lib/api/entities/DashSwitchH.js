const Entity = require('../Entity');

/**
 * Creates a dashSwitchH, which is implemented by the underlying C# class .
 * @class
 * @extends Entity
 */
class DashSwitchH extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the dashSwitchH
	 */
	constructor(data = {}) {
		return new Entity('dashSwitchH', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = DashSwitchH;