const Entity = require('../Entity');

class TempleCrackedBlock extends Entity {
	/**
	 * Creates an instance of {@link TempleCrackedBlock}, which is implemented by the underlying C# class `TempleCrackedBlock` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link TempleCrackedBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('templeCrackedBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = TempleCrackedBlock;