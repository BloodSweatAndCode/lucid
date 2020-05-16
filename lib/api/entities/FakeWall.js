const Entity = require('../Entity');

/**
 * Creates a fakeWall, which is implemented by the underlying C# class `FakeWall`.
 * @class
 * @extends Entity
 */
class FakeWall extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the fakeWall
	 */
	constructor(data = {}) {
		return new Entity('fakeWall', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FakeWall;