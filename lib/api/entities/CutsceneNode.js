const Entity = require('../Entity');

class CutsceneNode extends Entity {
	/**
	 * Creates an instance of {@link CutsceneNode}, which is implemented by the underlying C# class `CutsceneNode` in Celeste.
	 * @constructor
	 * @extends Entity
	 * @param {Object} [data={}] - An object containing the attributes of the {@link CutsceneNode} to be created
	 */
	constructor(data = {}) {
		return new Entity('cutsceneNode', Object.assign({
			// fill in default property key/values specific to this Entity
		}, data));
	}
}

module.exports = CutsceneNode;