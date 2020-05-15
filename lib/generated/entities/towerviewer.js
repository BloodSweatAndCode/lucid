// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a towerviewer, which is implemented by the underlying C# class `Lookout`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the towerviewer
 * @example
 * // create a towerviewer
 * const { Entity } = require('lucid-dream');
 * const towerviewer = Entity.createTowerviewer({});
 * @returns {Entity} The new towerviewer
 */
module.exports = function createTowerviewer(data = {}) {
	return new (require('../../class/Entity'))('towerviewer', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};