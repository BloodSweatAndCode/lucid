// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a interactTrigger, which is implemented by the underlying C# class `InteractTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the interactTrigger
 * @example
 * // create a interactTrigger
 * const { Trigger } = require('lucid-dream');
 * const interactTrigger = Trigger.createInteractTrigger({});
 * @returns {Entity} The new interactTrigger
 */
module.exports = function createInteractTrigger(data = {}) {
	return new (require('../../class/Trigger'))('interactTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};