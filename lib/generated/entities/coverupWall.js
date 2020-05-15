// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a coverupWall, which is implemented by the underlying C# class `CoverupWall`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the coverupWall
 * @example
 * // create a coverupWall
 * const { Entity } = require('lucid-dream');
 * const coverupWall = Entity.createCoverupWall({});
 * @returns {Entity} The new coverupWall
 */
module.exports = function createCoverupWall(data = {}) {
	return new (require('../../class/Entity'))('coverupWall', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};