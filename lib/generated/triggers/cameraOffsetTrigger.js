// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a cameraOffsetTrigger, which is implemented by the underlying C# class `CameraOffsetTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the cameraOffsetTrigger
 * @example
 * // create a cameraOffsetTrigger
 * const { Trigger } = require('lucid-dream');
 * const cameraOffsetTrigger = Trigger.createCameraOffsetTrigger({});
 * @returns {Entity} The new cameraOffsetTrigger
 */
module.exports = function createCameraOffsetTrigger(data = {}) {
	return new (require('../../class/Trigger'))('cameraOffsetTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};