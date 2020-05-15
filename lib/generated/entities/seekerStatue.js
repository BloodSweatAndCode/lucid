// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a seekerStatue, which is implemented by the underlying C# class `SeekerStatue`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the seekerStatue
 * @example
 * // create a seekerStatue
 * const { Entity } = require('lucid-dream');
 * const seekerStatue = Entity.createSeekerStatue({});
 * @returns {Entity} The new seekerStatue
 */
module.exports = function createSeekerStatue(data = {}) {
	return new (require('../../class/Entity'))('seekerStatue', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};