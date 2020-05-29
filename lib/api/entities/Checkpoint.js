const Entity = require('../Entity');
const { coreModes, inventory } = require('../constants');

class Checkpoint extends Entity {
	/**
	 * Creates an instance of {@link Checkpoint}, which is implemented by the underlying C# classes `Checkpoint`, `Vector2?` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Checkpoint} to be created
	 */
	constructor(data = {}, id) {
		super('checkpoint', Object.assign({
			x: 0,
			y: 0,
			inventory: null,
			dreaming: null,
			coreMode: null,
			checkpointID: -1,
			bg: '',
			allowOrigin: false
		}, data), id);
	}

	draw(ctx, imgData, room) {
		const bg = this.data.bg ?
			`objects/checkpoint/bg/${this.data.bg}` :
			'objects/checkpoint/bg/1';
		this.drawSprite(ctx, imgData, room, { path: bg, ry: 1 });
		this.drawSprite(ctx, imgData, room, { path: 'objects/checkpoint/flash03', ry: 1 });
	}
}

Checkpoint.dreaming = {
	Automatic: null,
	Dreaming: true,
	Awake: false
};

Checkpoint.inventories = Object.assign({
	Automatic: null,
}, inventory);

Checkpoint.coreModes = Object.assign({
	Automatic: null
}, coreModes);

module.exports = Checkpoint;