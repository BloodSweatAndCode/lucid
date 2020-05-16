const Entity = require('../Entity');

/**
 * Creates a cutsceneNode, which is implemented by the underlying C# class `CutsceneNode`.
 * @class
 * @extends Entity
 */
class CutsceneNode extends Entity {
	/**
	 * @constructor
	 * @param {Object} [data={}] - An object containing the attributes of the cutsceneNode
	 */
	constructor(data = {}) {
		return new Entity('cutsceneNode', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CutsceneNode;