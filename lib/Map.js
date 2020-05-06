const MapReader = require('./MapReader');
const MapWriter = require('./MapWriter');

class Map {

	constructor() {}

	static async load(mapFile) {
		const map = new Map();
		await map.load(mapFile);
		return map;
	}

	async load(mapFile) {
		this.file = mapFile;
		const reader = new MapReader(this);
		await reader.readMap();
	}

	async save(dstFile) {
		const writer = new MapWriter(this);
		await writer.writeMap(dstFile);
	}

}

module.exports = Map;

