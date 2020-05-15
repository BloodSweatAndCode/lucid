// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a colorSwitch, which is implemented by the underlying C# class `ClutterSwitch`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the colorSwitch
 * @example
 * // create a colorSwitch
 * const { Entity } = require('lucid-dream');
 * const colorSwitch = Entity.createColorSwitch({});
 * @returns {Entity} The new colorSwitch
 */
module.exports = function createColorSwitch(data = {}) {
	return new (require('../../class/Entity'))('colorSwitch', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};