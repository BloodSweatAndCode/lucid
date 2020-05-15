// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a oshiroTrigger, which is implemented by the underlying C# class `OshiroTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the oshiroTrigger
 * @example
 * // create a oshiroTrigger
 * const { Trigger } = require('lucid-dream');
 * const oshiroTrigger = Trigger.createOshiroTrigger({});
 * @returns {Entity} The new oshiroTrigger
 */
module.exports = function createOshiroTrigger(data = {}) {
	return new (require('../../class/Trigger'))('oshiroTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};