// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a musicFadeTrigger, which is implemented by the underlying C# class `MusicFadeTrigger`.
 * @class
 * @extends Trigger
 */
class MusicFadeTrigger extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the musicFadeTrigger
	 */
	constructor(data = {}) {
		return new Entity('musicFadeTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = MusicFadeTrigger;