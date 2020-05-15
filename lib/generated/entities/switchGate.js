// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a switchGate, which is implemented by the underlying C# class `SwitchGate`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the switchGate
 * @example
 * // create a switchGate
 * const { Entity } = require('lucid-dream');
 * const switchGate = Entity.createSwitchGate({});
 * @returns {Entity} The new switchGate
 */
module.exports = function createSwitchGate(data = {}) {
	return new (require('../../class/Entity'))('switchGate', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};