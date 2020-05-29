const Entity = require('../Entity');

class Cassette extends Entity {
	/**
	 * Creates an instance of {@link Cassette}, which is implemented by the underlying C# class `Cassette` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Cassette} to be created
	 */
	constructor(data = {}, id) {
		const x1 = data.x1 || 0;
		const y1 = data.y1 || 0;
		const x2 = data.x2 || x1;
		const y2 = data.y1 || y1;
		super('cassette', Object.assign({ x1, y1, x2, y2 }, data), id);
	}
}

Cassette.sprite = {
	path: 'collectables/cassette/idle00'
};

module.exports = Cassette;