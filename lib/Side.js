const Map = require('./Map');

class Side {
	constructor() {
		this.map = new Map();
		this.data = {};
	}

	async loadSide(file) {
		await this.map.decode(file);
		const mapData = await this.loadMap();
		const metadata = await this.loadMetadata(data);
	}

	loadMap(data) {

	}
}

module.exports = Side;