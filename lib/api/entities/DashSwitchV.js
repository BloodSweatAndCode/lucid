const Entity = require('../Entity');

class DashSwitchV extends Entity {
	/**
	 * Creates an instance of {@link DashSwitchV}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link DashSwitchV} to be created
	 */
	constructor(data = {}) {
		return new Entity('dashSwitchV', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = DashSwitchV;