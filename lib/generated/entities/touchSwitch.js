// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a touchSwitch, which is implemented by the underlying C# class `TouchSwitch`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the touchSwitch
 * @example
 * // create a touchSwitch
 * const { Entity } = require('lucid-dream');
 * const touchSwitch = Entity.createTouchSwitch({});
 * @returns {Entity} The new touchSwitch
 */
module.exports = function createTouchSwitch(data = {}) {
	return new (require('../../class/Entity'))('touchSwitch', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};