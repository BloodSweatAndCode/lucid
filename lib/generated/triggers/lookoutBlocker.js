// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a lookoutBlocker, which is implemented by the underlying C# class `LookoutBlocker`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the lookoutBlocker
 * @example
 * // create a lookoutBlocker
 * const { Trigger } = require('lucid-dream');
 * const lookoutBlocker = Trigger.createLookoutBlocker({});
 * @returns {Entity} The new lookoutBlocker
 */
module.exports = function createLookoutBlocker(data = {}) {
	return new (require('../../class/Trigger'))('lookoutBlocker', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};