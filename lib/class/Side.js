const { Map } = require('.');
const { attributes, children } = require('../utils');
const decoderBlacklist = [ 'Filler', 'Style', 'levels' ];

class Side {
	constructor() {
		this.map = new Map();
		this.data = {};
	}

	async load(file) {
		const mapData = await this.map.decode(file);
		console.log('DECODE');
		this.map.load(mapData);
		console.log('LOAD');
		this.data = this.loadMetadata(this.map.data);
		// console.log(mapData);
		// const metadata = await this.loadMetadata(data);
	}

	loadDataAsDict(target, data) {
		const name = data.__name;
		target[name] = {};

		for (let [ attr, value ] of attributes(data)) {
			target[name][attr] = value;
		}

		for (let child of children(data)) {
			this.loadDataAsDict(target[name], child);
		}
	}

	loadMetadata(data) {
		const res = {};

		for (let child of children(data)) {
			if (!decoderBlacklist.includes(child.__name)) {
				this.loadDataAsDict(res, child);
			}
		}

		return res;
	}
}

module.exports = Side;
