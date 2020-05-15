// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a coreModeToggle, which is implemented by the underlying C# class `CoreModeToggle`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the coreModeToggle
 * @example
 * // create a coreModeToggle
 * const { Entity } = require('lucid-dream');
 * const coreModeToggle = Entity.createCoreModeToggle({});
 * @returns {Entity} The new coreModeToggle
 */
module.exports = function createCoreModeToggle(data = {}) {
	return new (require('../../class/Entity'))('coreModeToggle', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};