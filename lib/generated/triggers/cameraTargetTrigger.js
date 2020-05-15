// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a cameraTargetTrigger, which is implemented by the underlying C# class `CameraTargetTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the cameraTargetTrigger
 * @example
 * // create a cameraTargetTrigger
 * const { Trigger } = require('lucid-dream');
 * const cameraTargetTrigger = Trigger.createCameraTargetTrigger({});
 * @returns {Entity} The new cameraTargetTrigger
 */
module.exports = function createCameraTargetTrigger(data = {}) {
	return new (require('../../class/Trigger'))('cameraTargetTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};