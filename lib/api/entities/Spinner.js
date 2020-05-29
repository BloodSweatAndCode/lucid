const Entity = require('../Entity');

class Spinner extends Entity {
	/**
	 * Creates an instance of {@link Spinner}, which is implemented by the underlying C# classes `DustStaticSpinner`, `CrystalStaticSpinner` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Spinner} to be created
	 * @param {Number} [data.x=0] - x position
	 * @param {Number} [data.y=0] - y position
	 * @param {Boolean} [data.attachToSolid=false] - Does this spinner attach to solid objects?
	 * @param {String} [data.color='Blue'] - color of the spinner. Valid values are: `Blue`, `Red', `Purple`, and `Rainbow`
	 * @param {Number} [id] - unique id of the entity
	 */
	constructor(data = {}, id) {
		super('spinner', Object.assign({
			x: 0,
			y: 0,
			attachToSolid: false,
			color: 'Blue'
		}, data), id);
	}
}

Spinner.sprite = {
	path: 'danger/crystal/fg_blue03'
};

Spinner.colors = [
	'Blue',
	'Red',
	'Purple',
	'Rainbow'
];

module.exports = Spinner;