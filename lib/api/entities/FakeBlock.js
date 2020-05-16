const Entity = require('../Entity');

class FakeBlock extends Entity {
	/**
	 * Creates an instance of {@link FakeBlock}, which is implemented by the underlying C# class `FakeWall` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link FakeBlock} to be created
	 */
	constructor(data = {}) {
		return new Entity('fakeBlock', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FakeBlock;