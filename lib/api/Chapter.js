const path = require('path');
const { safeName } = require('../utils');

class Chapter {
	/**
	 * @constructor
	constructor(data = {}) {
		Object.assign(this, {
			name: 'Lucid Dream Chapter',
			sides: {
				A: null,
				B: null,
				C: null
			}
		}, data);
	}

	async package(mapDir) {
		for (let sideKey of Object.keys(this.sides)) {
			const side = this.sides[sideKey];
			if (!side) { continue; }
			const sideFilename = safeName(this.name) + (sideKey === 'A' ? '' : '-' + sideKey.toUpperCase()) + '.bin';
			const sidePath = path.join(mapDir, sideFilename);
			await side.encode(sidePath);
		}
	}
}

module.exports = Chapter;