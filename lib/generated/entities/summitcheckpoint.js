// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a summitcheckpoint, which is implemented by the underlying C# class `SummitCheckpoint`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the summitcheckpoint
 * @example
 * // create a summitcheckpoint
 * const { Entity } = require('lucid-dream');
 * const summitcheckpoint = Entity.createSummitcheckpoint({});
 * @returns {Entity} The new summitcheckpoint
 */
module.exports = function createSummitcheckpoint(data = {}) {
	return new (require('../../class/Entity'))('summitcheckpoint', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};