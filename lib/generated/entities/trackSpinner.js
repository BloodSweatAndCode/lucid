// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a trackSpinner, which is implemented by the underlying C# classes `StarTrackSpinner`, `DustTrackSpinner`, `BladeTrackSpinner`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the trackSpinner
 * @example
 * // create a trackSpinner
 * const { Entity } = require('lucid-dream');
 * const trackSpinner = Entity.createTrackSpinner({});
 * @returns {Entity} The new trackSpinner
 */
module.exports = function createTrackSpinner(data = {}) {
	return new (require('../../class/Entity'))('trackSpinner', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};