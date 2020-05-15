// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a detachFollowersTrigger, which is implemented by the underlying C# class `DetachStrawberryTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the detachFollowersTrigger
 * @example
 * // create a detachFollowersTrigger
 * const { Trigger } = require('lucid-dream');
 * const detachFollowersTrigger = Trigger.createDetachFollowersTrigger({});
 * @returns {Entity} The new detachFollowersTrigger
 */
module.exports = function createDetachFollowersTrigger(data = {}) {
	return new (require('../../class/Trigger'))('detachFollowersTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};