// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a birdPathTrigger, which is implemented by the underlying C# class `BirdPathTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the birdPathTrigger
 * @example
 * // create a birdPathTrigger
 * const { Trigger } = require('lucid-dream');
 * const birdPathTrigger = Trigger.createBirdPathTrigger({});
 * @returns {Entity} The new birdPathTrigger
 */
module.exports = function createBirdPathTrigger(data = {}) {
	return new (require('../../class/Trigger'))('birdPathTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};