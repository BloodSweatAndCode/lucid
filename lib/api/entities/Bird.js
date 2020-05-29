const Entity = require('../Entity');

class Bird extends Entity {
	/**
	 * Creates an instance of {@link Bird}, which is implemented by the underlying C# class `BirdNPC` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link Bird} to be created
	 * @param {Number} [data.x=0] - x position
	 * @param {Number} [data.y=0] - y position
	 * @param {String} [data.mode='Sleeping'] - The mode that the bird is in. Valid modes are: `ClimbingTutorial`, `DashingTutorial`, `DreamJumpTutorial`, `SuperWallJumpTutorial`, `HyperJumpTutorial`, `FlyAway`, `None`, `Sleeping`, `MoveToNodes`, `WaitForLightningOff`
	 * @param {Boolean} [data.onlyOnce=false] - Do we only show the bird once?
	 * @param {Boolean} [data.onlyIfPlayerLeft=false] - I don't know what this does
	 * @param {Array} [data.nodes=[]] - An array of nodes representing the travel path of the bird in [x,y] coordinates
	 * @param {Number} [id] - unique id of the entity
	 */
	constructor(data = {}, id) {
		super('bird', Object.assign({
			x: 0,
			y: 0,
			mode: 'Sleeping',
			onlyOnce: false,
			onlyIfPlayerLeft: false,
			nodes: []
		}, data), id);
	}
}

Bird.sprite = {
	path: 'characters/bird/crow00'
};

Bird.modes = [
	'ClimbingTutorial',
	'DashingTutorial',
	'DreamJumpTutorial',
	'SuperWallJumpTutorial',
	'HyperJumpTutorial',
	'FlyAway',
	'None',
	'Sleeping',
	'MoveToNodes',
	'WaitForLightningOff'
];

module.exports = Bird;