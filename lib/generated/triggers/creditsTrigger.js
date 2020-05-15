// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a creditsTrigger, which is implemented by the underlying C# class `CreditsTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the creditsTrigger
 * @example
 * // create a creditsTrigger
 * const { Trigger } = require('lucid-dream');
 * const creditsTrigger = Trigger.createCreditsTrigger({});
 * @returns {Entity} The new creditsTrigger
 */
module.exports = function createCreditsTrigger(data = {}) {
	return new (require('../../class/Trigger'))('creditsTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};