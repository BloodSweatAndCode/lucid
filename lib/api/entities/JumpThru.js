const Entity = require('../Entity');

/**
 * Creates a jumpThru, which is implemented by the underlying C# class `JumpthruPlatform`.
 * @class
 * @extends Entity
 */
class JumpThru extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the jumpThru
	 */
	constructor(data = {}) {
		return new Entity('jumpThru', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = JumpThru;