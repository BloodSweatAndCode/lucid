// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a windAttackTrigger, which is implemented by the underlying C# class `WindAttackTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the windAttackTrigger
 * @example
 * // create a windAttackTrigger
 * const { Trigger } = require('lucid-dream');
 * const windAttackTrigger = Trigger.createWindAttackTrigger({});
 * @returns {Entity} The new windAttackTrigger
 */
module.exports = function createWindAttackTrigger(data = {}) {
	return new (require('../../class/Trigger'))('windAttackTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};