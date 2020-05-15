// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a cloud, which is implemented by the underlying C# class `Cloud`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the cloud
 * @example
 * // create a cloud
 * const { Entity } = require('lucid-dream');
 * const cloud = Entity.createCloud({});
 * @returns {Entity} The new cloud
 */
module.exports = function createCloud(data = {}) {
	return new (require('../../class/Entity'))('cloud', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};