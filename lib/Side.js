const Map = require('./Map');

class Side {
	constructor() {
		this.map = new Map();
		this.data = {};
	}

	async load(file) {
		await this.map.decode(file);
		await this.map.load();
		// console.log(mapData);
		// const metadata = await this.loadMetadata(data);
	}

	loadMetadata() {
		return {};
	}
}

module.exports = Side;