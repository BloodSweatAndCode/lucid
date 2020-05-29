const Entity = require('../Entity');

class FakeHeartGem extends Entity {
	/**
	 * Creates an instance of {@link FakeHeartGem}, which is implemented by the underlying C# class `FakeHeartGem` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link FakeHeartGem} to be created
	 */
	constructor(data = {}, id) {
		super('fakeHeart', Object.assign({
			x: 0,
			y: 0,
			color: 'Random'
		}, data), id);
	}
}

FakeHeartGem.sprite = {
	path: 'collectables/heartGem/0/00.png'
};

module.exports = FakeHeartGem;