// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a finalBoss, which is implemented by the underlying C# class `FinalBoss`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the finalBoss
 * @example
 * // create a finalBoss
 * const { Entity } = require('lucid-dream');
 * const finalBoss = Entity.createFinalBoss({});
 * @returns {Entity} The new finalBoss
 */
module.exports = function createFinalBoss(data = {}) {
	return new (require('../../class/Entity'))('finalBoss', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};