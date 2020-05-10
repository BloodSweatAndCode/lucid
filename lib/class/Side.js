const { Map } = require('.');
const { children, dictAsEncodedData, loadDataAsDict } = require('../utils');
const decoderBlacklist = [ 'Filler', 'Style', 'levels' ];

class Side {
	constructor() {
		this.map = new Map();
		this.data = {};
	}

	async load(file) {
		const mapData = await this.map.decode(file);
		this.map.load(mapData);
		this.data = this.loadMetadata(mapData);
	}

	async encode(file) {
		const data = this.map;
		this.encodeMetadata(data, this.data);
		return await this.map.encode(data, file);
	}

	loadMetadata(data) {
		const res = {};
		for (let child of children(data)) {
			if (!decoderBlacklist.includes(child.__name)) {
				loadDataAsDict(res, child);
			}
		}
		return res;
	}

	encodeMetadata(target, data) {
		for (let [ key, value ] of Object.entries(data)) {
			target.__children.push(dictAsEncodedData(key, value));
		}
	}
}

module.exports = Side;
