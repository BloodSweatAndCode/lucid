const Entity = require('../Entity');

class Bonfire extends Entity {
	/**
	 * Creates an instance of {@link Bonfire}, which is implemented by the underlying C# class `Bonfire` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Bonfire} to be created
	 */
	constructor(data = {}, id) {
		super('bonfire', Object.assign({
			x: 0,
			y: 0,
			mode: 'Lit'
		}, data), id);
	}

	spritePath() {
		const mode = this.data.mode.toLowerCase();
		if (mode === 'lit') {
			return 'objects/campfire/fire08';
		} else if (mode === 'smoking') {
			return 'objects/campfire/smoking04';
		} else {
			return 'objects/campfire/fire00';
		}
	}
}

// TODO: add in additional paths for fire modes
// smoking: objects/campfire/smoking04.png
// unlit: objects/campfire/fire00.png
Bonfire.sprite = {
	ry: 1
};

Bonfire.modes = [
	'Unlit',
	'Lit',
	'Smoking'
];

module.exports = Bonfire;