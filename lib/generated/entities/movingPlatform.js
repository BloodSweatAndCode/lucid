// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a movingPlatform, which is implemented by the underlying C# class `MovingPlatform`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the movingPlatform
 * @example
 * // create a movingPlatform
 * const { Entity } = require('lucid-dream');
 * const movingPlatform = Entity.createMovingPlatform({});
 * @returns {Entity} The new movingPlatform
 */
module.exports = function createMovingPlatform(data = {}) {
	return new (require('../../class/Entity'))('movingPlatform', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};