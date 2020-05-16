// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a fakeHeart, which is implemented by the underlying C# class `FakeHeart`.
 * @class
 * @extends Entity
 */
class FakeHeart extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the fakeHeart
	 */
	constructor(data = {}) {
		return new Entity('fakeHeart', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FakeHeart;