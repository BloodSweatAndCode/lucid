const Entity = require('../Entity');

class FakeHeart extends Entity {
	/**
	 * Creates an instance of {@link FakeHeart}, which is implemented by the underlying C# class `FakeHeart` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link FakeHeart} to be created
	 */
	constructor(data = {}) {
		return new Entity('fakeHeart', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = FakeHeart;