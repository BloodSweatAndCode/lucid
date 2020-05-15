// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a conditionBlock, which is implemented by the underlying C# classes `Exception`, `ExitBlock`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the conditionBlock
 * @example
 * // create a conditionBlock
 * const { Entity } = require('lucid-dream');
 * const conditionBlock = Entity.createConditionBlock({});
 * @returns {Entity} The new conditionBlock
 */
module.exports = function createConditionBlock(data = {}) {
	return new (require('../../class/Entity'))('conditionBlock', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};