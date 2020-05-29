const Entity = require('../Entity');

class BadelineBoost extends Entity {
	/**
	 * Creates an instance of {@link BadelineBoost}, which is implemented by the underlying C# class `BadelineBoost` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link BadelineBoost} to be created
	 * @param {Number} [data.x=0] - x position
	 * @param {Number} [data.y=0] - y position
	 * @param {Array} [data.nodes=[]] - An array of nodes representing the travel path of boosts in [x,y] coordinates
	 * @param {Boolean} [data.lockCamera=true] - Do we lock the camera?
	 * @param {Boolean} [data.finalCh9Boost=false] - Is this the final Chapter 9 boost?
	 * @param {Boolean} [data.finalCh9GoldenBoost=false] - Is this the final Chapter 9 golden boost?
	 * @param {Boolean} [data.finalCh9Dialog=false] - Is this the final Chapter 9 dialog?
	 * @param {Number} [id] - unique id of the entity
	 */
	constructor(data = {}, id) {
		super('badelineBoost', Object.assign({
			x: 0,
			y: 0,
			nodes: [],
			lockCamera: true,
			canSkip: false,
			finalCh9Boost: false,
			finalCh9GoldenBoost: false,
			finalCh9Dialog: false
		}, data), id);
	}
}

BadelineBoost.sprite = {
	path: 'objects/badelineboost/idle00'
};

module.exports = BadelineBoost;