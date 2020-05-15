// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a slider, which is implemented by the underlying C# class `Slider`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the slider
 * @example
 * // create a slider
 * const { Entity } = require('lucid-dream');
 * const slider = Entity.createSlider({});
 * @returns {Entity} The new slider
 */
module.exports = function createSlider(data = {}) {
	return new (require('../../class/Entity'))('slider', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};