// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a cliffside_flag, which is implemented by the underlying C# class `CliffsideWindFlag`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the cliffside_flag
 * @example
 * // create a cliffside_flag
 * const { Entity } = require('lucid-dream');
 * const cliffside_flag = Entity.createCliffside_flag({});
 * @returns {Entity} The new cliffside_flag
 */
module.exports = function createCliffside_flag(data = {}) {
	return new (require('../../class/Entity'))('cliffside_flag', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};