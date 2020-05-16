const Entity = require('../Entity');

class FakeWall extends Entity {
	/**
	 * Creates an instance of {@link FakeWall}, which is implemented by the underlying C# class `FakeWall` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link FakeWall} to be created
	 */
	constructor(data = {}) {
		return new Entity('fakeWall', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FakeWall;