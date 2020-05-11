const { fill2dArray } = require('../utils');

class ObjectTiles {
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

	size() {
		const height = this.data.length;
		const width = (this.data[0] || []).length;
		return [ width * 8, height * 8 ];
	}
}

module.exports = ObjectTiles;
