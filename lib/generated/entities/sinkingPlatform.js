// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a sinkingPlatform, which is implemented by the underlying C# class `SinkingPlatform`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the sinkingPlatform
 * @example
 * // create a sinkingPlatform
 * const { Entity } = require('lucid-dream');
 * const sinkingPlatform = Entity.createSinkingPlatform({});
 * @returns {Entity} The new sinkingPlatform
 */
module.exports = function createSinkingPlatform(data = {}) {
	return new (require('../../class/Entity'))('sinkingPlatform', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};