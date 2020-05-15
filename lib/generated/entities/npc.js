// THIS FILE IS GENERATED. DO NOT EDIT DIRECTLY.

/**
 * Creates a npc, which is implemented by the underlying C# classes `NPC00_Granny`, `NPC01_Theo`, `NPC02_Theo`, `NPC03_Theo_Escaping`, `NPC03_Theo_Vents`, `NPC03_Oshiro_Lobby`, `NPC03_Oshiro_Hallway1`, `NPC03_Oshiro_Hallway2`, `NPC03_Oshiro_Cluttter`, `NPC03_Oshiro_Breakdown`, `NPC03_Oshiro_Suite`, `NPC03_Oshiro_Rooftop`, `NPC04_Granny`, `NPC04_Theo`, `NPC05_Theo_Entrance`, `NPC05_Theo_Mirror`, `NPC05_Badeline`, `NPC06_Theo_Plateau`, `NPC06_Granny`, `NPC06_Badeline_Crying`, `NPC06_Granny_Ending`, `NPC06_Theo_Ending`, `NPC07X_Granny_Ending`, `NPC08_Theo`, `NPC08_Granny`, `NPC09_Granny_Outside`, `NPC09_Granny_Inside`, `NPC10_Gravestone`, `NPC07X_Granny_Ending`.
 * @augments Entity
 * @param {Object} [data={}] - An Object containing the attributes of the npc
 * @example
 * // create a npc
 * const { Entity } = require('lucid-dream');
 * const npc = Entity.createNpc({});
 * @returns {Entity} The new npc
 */
module.exports = function createNpc(data = {}) {
	return new (require('../../class/Entity'))('npc', Object.assign({
		// fill in default property key/values specific to this Entity
	}, data));
};