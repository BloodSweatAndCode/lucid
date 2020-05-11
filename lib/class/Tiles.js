const { fill2dArray } = require('../utils');

// tile_fg_names = {
// 	'0': 'Air',
// 	'1': 'Dirt',
// 	'3': 'Snow',
// 	'4': 'Girder',
// 	'5': 'Tower',
// 	'6': 'Stone',
// 	'7': 'Cement',
// 	'8': 'Rock',
// 	'9': 'Wood',
// 	'a': 'Wood Stone',
// 	'b': 'Cliffside',
// 	'c': 'Pool Edges',
// 	'd': 'Temple A',
// 	'e': 'Temple B',
// 	'f': 'Cliffside Alt',
// 	'g': 'Reflection',
// 	'G': 'Reflection Alt',
// 	'h': 'Grass',
// 	'i': 'Summit',
// 	'j': 'Summit No Snow',
// 	'k': 'Core',
// 	'l': 'Deadgrass',
// 	'm': 'Lost Levels',
// 	'n': 'Scifi',
// 	'z': 'Template',

// 	'Air': '0',
// 	'Dirt': '1',
// 	'Snow': '3',
// 	'Girder': '4',
// 	'Tower': '5',
// 	'Stone': '6',
// 	'Cement': '7',
// 	'Rock': '8',
// 	'Wood': '9',
// 	'Wood Stone': 'a',
// 	'Cliffside': 'b',
// 	'Pool Edges': 'c',
// 	'Temple A': 'd',
// 	'Temple B': 'e',
// 	'Cliffside Alt': 'f',
// 	'Reflection': 'g',
// 	'Reflection Alt': 'G',
// 	'Grass': 'h',
// 	'Summit': 'i',
// 	'Summit No Snow': 'j',
// 	'Core': 'k',
// 	'Deadgrass': 'l',
// 	'Lost Levels': 'm',
// 	'Scifi': 'n',
// 	'Template': 'z'
// };

// const tile_bg_names = {
// 	'0': 'Air',
// 	'1': 'Dirt',
// 	'2': 'Brick',
// 	'3': 'Brick Ruined',
// 	'4': 'Wood',
// 	'5': 'Resort Stone',
// 	'6': 'Cliffside',
// 	'7': 'Pool',
// 	'8': 'Temple A',
// 	'9': 'Temple B',
// 	'a': 'Reflection',
// 	'b': 'Snow',
// 	'c': 'Summit',
// 	'd': 'Core',
// 	'e': 'Lost Levels',
// 	'z': 'Template',

// 	'Air': '0',
// 	'Dirt': '1',
// 	'Brick': '2',
// 	'Brick Ruined': '3',
// 	'Wood': '4',
// 	'Resort Stone': '5',
// 	'Cliffside': '6',
// 	'Pool': '7',
// 	'Temple A': '8',
// 	'Temple B': '9',
// 	'Reflection': 'a',
// 	'Snow': 'b',
// 	'Summit': 'c',
// 	'Core': 'd',
// 	'Lost Levels': 'e',
// 	'Template': 'z'
// };

// const valid_fg_tiles = [
// 	'0', '1', '3', '4', '5', '6', '7',
// 	'8', '9', 'a', 'b', 'c', 'd', 'e',
// 	'f', 'g', 'G', 'h', 'i', 'j', 'k',
// 	'l'
// ];

// const valid_bg_tiles = [
// 	'0', '1', '2', '3', '4', '5', '6',
// 	'7', '8', '9', 'a', 'b', 'c', 'd'
// ];

class Tiles {
	constructor(data) {
		if (!data || data === '') {
			data = fill2dArray('0', 40, 23);
		} else if (typeof data === 'string') {
			const lines = data.split(/[\n\r]/).filter(l => l).map(l => l.trimEnd());
			const cols = Math.max(...(lines.map(l => l.length)));
			const rows = lines.length;
			data = fill2dArray('0', cols, rows);

			lines.forEach((line, index) => {
				for (let x = 0; x < line.length; x++) {
					data[index][x] = line.charAt(x);
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

	minimizeTilesString(emptyValue = '0', separator = ',') {
		const { data } = this;
		const res = [];
		const [ rows, cols ] = [ data.length, data[0].length ]; // TODO: fix this
		let relevantRowsCount = 0;

		for (let i = 0; i < rows; i++) {
			relevantRowsCount = i + 1;
			if (!data[i].filter(o => o !== emptyValue).length) {
				break;
			}
		}

		for (let i = 0; i < relevantRowsCount; i++) {
			const row = data[i];
			let relevantCols = cols;

			for (let j = 0; j < cols; j++) {
				if (row[j] !== emptyValue) {
					break;
				}
				relevantCols -= 1;
			}

			res.push(row.slice(0, relevantCols).join(separator));
		}

		return res.join('\n');
	}
}

module.exports = Tiles;

