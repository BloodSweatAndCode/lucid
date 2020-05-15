// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a zipMover, which is implemented by the underlying C# classes `ZipMover`, `EntityID`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the zipMover
 * @example
 * // create a zipMover
 * const { Entity } = require('lucid-dream');
 * const zipMover = Entity.createZipMover({});
 * @returns {Entity} The new zipMover
 */
module.exports = function createZipMover(data = {}) {
	return new (require('../../class/Entity'))('zipMover', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};