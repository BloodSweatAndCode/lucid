const { fill2dArray } = require('../utils');

class ObjectTiles {
	/**
	 * Creates an instance of ObjectTiles
	 * @constructor
	 * @param {Array|String} data - A 2D Array of object tile values, or a String in CSV format containing the values for a 2D Array of object tiles.
	 * @example
	 * // Both calls create the same set of object tiles
	 * const { ObjectTiles } = require('lucid-dream');
	 * const objectTiles1 = new ObjectTiles([ [ 1, 2 ], [ 3, 4 ] ]);
	 * const objectTiles2 = new ObjectTiles('1,2\n3,4\n');
	 * @property {Array} data - A 2D Array of object tile values.
	 */
	constructor(data) {
		if (!data || data === '') {
			data = fill2dArray(-1, 40, 23);
		} else if (typeof data === 'string') {
			const lines = data.split(/[\n\r]/).filter(l => l).map(l => l.trimEnd());
			const cols = Math.max(...(lines.map(l => l.split(',').length)));
			const rows = lines.length;

			data = fill2dArray(-1, cols, rows);
			lines.forEach((line, index) => {
				line.split(',').forEach((char, i) => {
					data[index][i] = parseInt(char, 10);
				});
			});
		}
		this.data = data;
	}

	/**
	 * Returns `[width,height]` size of instance in pixels
	 * @example
	 * // returns `[ 32, 16 ]`
	 * const { ObjectTiles } = require('lucid-dream');
	 * const objectTiles = new ObjectTiles('1,1,1,1\n2,2,3,4\n');
	 * objectTiles.size();
	 */
	size() {
		const height = this.data.length;
		const width = (this.data[0] || []).length;
		return [ width * 8, height * 8 ];
	}
}

module.exports = ObjectTiles;
