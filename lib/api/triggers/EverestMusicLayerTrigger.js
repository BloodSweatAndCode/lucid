const Entity = require('../Entity');

class EverestMusicLayerTrigger extends Entity {
	/**
	 * Creates an instance of {@link EverestMusicLayerTrigger}, which is implemented by the underlying C# class  in Celeste.
	 * @constructor
	 * @extends Trigger
	 * @param {Object} [data={}] - An object containing the attributes of the {@link EverestMusicLayerTrigger} to be created
	 */
	constructor(data = {}) {
		return new Entity('everestMusicLayerTrigger', Object.assign({
			// fill in default property key/values specific to this Trigger
		}, data));
	}
}

module.exports = EverestMusicLayerTrigger;