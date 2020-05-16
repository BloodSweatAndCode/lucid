const Entity = require('../Entity');

/**
 * Creates a fakeBlock, which is implemented by the underlying C# class `FakeWall`.
 * @class
 * @extends Entity
 */
class FakeBlock extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the fakeBlock
	 */
	constructor(data = {}) {
		return new Entity('fakeBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FakeBlock;