// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a dashBlock, which is implemented by the underlying C# class `DashBlock`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the dashBlock
 * @example
 * // create a dashBlock
 * const { Entity } = require('lucid-dream');
 * const dashBlock = Entity.createDashBlock({});
 * @returns {Entity} The new dashBlock
 */
module.exports = function createDashBlock(data = {}) {
	return new (require('../../class/Entity'))('dashBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};