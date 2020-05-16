const Entity = require('../Entity');

class BounceBlock extends Entity {
	/**
	 * Creates an instance of {@link BounceBlock}, which is implemented by the underlying C# class `BounceBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BounceBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('bounceBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = BounceBlock;