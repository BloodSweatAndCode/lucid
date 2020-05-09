const { ObjectTiles, Tiles } = require('.');
const { copy2dArray, fill2dArray } = require('../utils');

const blacklistedRoomAttrs = [
	'position',
	'size',
	'color',
	'fgDecals',
	'bgDecals',
	'fgTiles',
	'bgTiles',
	'objTiles',
	'entities',
	'triggers'
];

class Room {
	constructor(data = {}) {
		Object.assign(this, data);
	}

	updateTileSize(center = '0' /* , border = '0' */) {
		const [ width, height ] = this.size;
		const tw = Math.ceil(width / 8);
		const th = Math.ceil(height / 8);
		const objTiles = fill2dArray(-1, tw, th);

		let [ ftw, fth ] = this.fgTiles.size();
		ftw = Math.min(ftw, tw);
		fth = Math.min(fth, th);

		let [ btw, bth ] = this.bgTiles.size();
		btw = Math.min(btw, tw);
		bth = Math.min(bth, th);

		let [ otw, oth ] = this.objTiles.size();
		otw = Math.min(otw, tw);
		oth = Math.min(oth, th);

		const fg = fill2dArray(center, tw, th);
		const bg = fill2dArray(center, tw, th);

		copy2dArray(this.fgTiles.data, fg, fth, ftw);
		copy2dArray(this.bgTiles.data, bg, bth, btw);
		copy2dArray(this.objTiles.data, objTiles, oth, otw);

		this.fgTiles = new Tiles(fg);
		this.bgTiles = new Tiles(bg);
		this.objTiles = new ObjectTiles(objTiles);
	}

	toDict() {
		const res = {};

		for (let field of Object.keys(this)) {
			const value = this[field];
			if (!blacklistedRoomAttrs.includes(field)) {
				res[field] = value;
			}
		}

		res.__name = 'level';
		res.x = this.position[0];
		res.y = this.position[1];
		res.c = this.color;
		res.width = this.size[0];
		res.height = this.size[1];
		res.__children = [
			{
				__name: 'solids',
				innerText: this.fgTiles.minimizeTilesString('0', '')
			},
			{
				__name: 'bg',
				innerText: this.bgTiles.minimizeTilesString('0', '')
			},
			{
				__name: 'objtiles',
				// TODO: yuck
				innerText: this.bgTiles.minimizeTilesString.bind(this.objTiles, -1, ',')
			},
			{
				__name: 'fgtiles',
				tileset: 'Scenery'
			},
			{
				__name: 'bgtiles',
				tileset: 'Scenery'
			},
			{
				__name: 'entities',
				__children: this.entities.map(e => e.toDict())
			},
			{
				__name: 'triggers',
				__children: this.triggers.map(t => t.toDict())
			},
			{
				__name: 'fgdecals',
				tileset: 'Scenery',
				__children: this.fgDecals.map(f => f.toDict())
			},
			{
				__name: 'bgdecals',
				tileset: 'Scenery',
				__children: this.bgDecals.map(b => b.toDict())
			}
		];

		return res;
	}
}

module.exports = Room;
