// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a cutsceneNode, which is implemented by the underlying C# class `CutsceneNode`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the cutsceneNode
 * @example
 * // create a cutsceneNode
 * const { Entity } = require('lucid-dream');
 * const cutsceneNode = Entity.createCutsceneNode({});
 * @returns {Entity} The new cutsceneNode
 */
module.exports = function createCutsceneNode(data = {}) {
	return new (require('../../class/Entity'))('cutsceneNode', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};