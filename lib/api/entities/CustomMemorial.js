const Entity = require('../Entity');

class CustomMemorial extends Entity {
	/**
	 * Creates an instance of {@link CustomMemorial}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CustomMemorial} to be created
	 */
	constructor(data = {}) {
		return new Entity('customMemorial', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CustomMemorial;