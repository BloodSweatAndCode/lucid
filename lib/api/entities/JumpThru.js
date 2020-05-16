const Entity = require('../Entity');

class JumpThru extends Entity {
	/**
	 * Creates an instance of {@link JumpThru}, which is implemented by the underlying C# class `JumpthruPlatform` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link JumpThru} to be created
	 */
	constructor(data = {}) {
		return new Entity('jumpThru', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = JumpThru;