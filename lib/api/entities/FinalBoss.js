// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a finalBoss, which is implemented by the underlying C# class `FinalBoss`.
 * @class
 * @extends Entity
 */
class FinalBoss extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the finalBoss
	 */
	constructor(data = {}) {
		return new Entity('finalBoss', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FinalBoss;