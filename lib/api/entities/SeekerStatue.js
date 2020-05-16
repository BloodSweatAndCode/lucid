// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

const Entity = require('../Entity');

/**
 * Creates a seekerStatue, which is implemented by the underlying C# class `SeekerStatue`.
 * @class
 * @extends Entity
 */
class SeekerStatue extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the seekerStatue
	 */
	constructor(data = {}) {
		return new Entity('seekerStatue', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = SeekerStatue;