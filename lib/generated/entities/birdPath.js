// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a birdPath, which is implemented by the underlying C# class `BirdPath`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the birdPath
 * @example
 * // create a birdPath
 * const { Entity } = require('lucid-dream');
 * const birdPath = Entity.createBirdPath({});
 * @returns {Entity} The new birdPath
 */
module.exports = function createBirdPath(data = {}) {
	return new (require('../../class/Entity'))('birdPath', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};