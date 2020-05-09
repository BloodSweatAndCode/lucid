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
				for (let x = 0; x < line.length; x++) {
					data[index][x] = parseInt(line.charAt(x), 10);
				}
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




// function Base.string(t::ObjectTiles)
//     return join(join.([t.data[i, :] for i in 1:size(t.data, 1)], ','), "\n")
// end