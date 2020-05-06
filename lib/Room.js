const { fill2dArray } = require('./utils');

class Room {
	constructor(data = {}) {
		Object.assign(this, data);
	}

	updateTileSize(center = '0', border = '0') {\
		const [ width, height ] = room.size;
		const tw = Math.ceiling(width / 8);
		const th = Math.ceiling(height / 8);

		const tiles = fill2dArray(center, tw, th);
		const objTiles = fill2dArray(-1, tw, th);

		let [ ftw, fth ] = room.fgTiles.size();
		ftw = Math.min(ftw, tw);
		fth = Math.min(fth, th);

		let [ btw, bth ] = room.bgTiles.size();
		btw = Math.min(btw, tw);
		bth = Math.min(bth, th);

		let [ otw, oth ] = room.objTiles.size();
		otw = Math.min(otw, tw);
		oth = Math.min(oth, th);

		const fg = tiles.slice(0);
		const bg = tiles.slice(0);



	}
}

module.exports = Room;


// # Set the fg and bg tiles to the size of the room
// function updateTileSize!(room::Room, center::Char='0', border::Char='0')
//     tw, th = ceil.(Int, room.size ./ 8)

//     tiles = fill(center, (th, tw))
//     objTiles = fill(-1, (th, tw))

//     fth, ftw = min.(size(room.fgTiles.data), (th, tw))
//     bth, btw = min.(size(room.bgTiles.data), (th, tw))
//     oth, otw = min.(size(room.objTiles.data), (th, tw))

//     fg = copy(tiles)
//     bg = copy(tiles)

//     fg[1:fth, 1:ftw] = room.fgTiles.data[1:fth, 1:ftw]
//     bg[1:bth, 1:btw] = room.bgTiles.data[1:bth, 1:btw]
//     objTiles[1:oth, 1:otw] = room.objTiles.data[1:oth, 1:otw]

//     room.fgTiles = Tiles(fg)
//     room.bgTiles = Tiles(bg)
//     room.objTiles = ObjectTiles(objTiles)
// end