// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a checkpoint, which is implemented by the underlying C# classes `Checkpoint`, `Vector2?`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the checkpoint
 * @example
 * // create a checkpoint
 * const { Entity } = require('lucid-dream');
 * const checkpoint = Entity.createCheckpoint({});
 * @returns {Entity} The new checkpoint
 */
module.exports = function createCheckpoint(data = {}) {
	return new (require('../../class/Entity'))('checkpoint', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};