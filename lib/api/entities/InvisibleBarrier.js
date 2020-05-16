const Entity = require('../Entity');

class InvisibleBarrier extends Entity {
	/**
	 * Creates an instance of {@link InvisibleBarrier}, which is implemented by the underlying C# class `InvisibleBarrier` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link InvisibleBarrier} to be created
	 */
	constructor(data = {}) {
		return new Entity('invisibleBarrier', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = InvisibleBarrier;