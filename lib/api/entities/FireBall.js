// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a fireBall, which is implemented by the underlying C# class `FireBall`.
 * @class
 * @extends Entity
 */
class FireBall extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the fireBall
	 */
	constructor(data = {}) {
		return new Entity('fireBall', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FireBall;