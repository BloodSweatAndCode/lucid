// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a cameraAdvanceTargetTrigger, which is implemented by the underlying C# class `CameraAdvanceTargetTrigger`.
 * @augments Trigger
 * @param {Object} [data={}] - An Object containing the attributes of the cameraAdvanceTargetTrigger
 * @example
 * // create a cameraAdvanceTargetTrigger
 * const { Trigger } = require('lucid-dream');
 * const cameraAdvanceTargetTrigger = Trigger.createCameraAdvanceTargetTrigger({});
 * @returns {Entity} The new cameraAdvanceTargetTrigger
 */
module.exports = function createCameraAdvanceTargetTrigger(data = {}) {
	return new (require('../../class/Trigger'))('cameraAdvanceTargetTrigger', Object.assign({
		// fill in default property key/values specific to this Trigger
	}, data));
};