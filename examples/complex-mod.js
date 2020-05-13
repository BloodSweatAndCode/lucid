const fs = require('fs').promises;
const path = require('path');
const { Chapter, Entity, Mod, Room, Side, Tiles } = require('../lucid-dream');

const tileDataPath = path.join(__dirname, 'data', 'example-tiles-40x23.txt');

(async function() {

	// create the individual mod elements
	const mod = new Mod({
		name: 'BSAC\'s Complex Mod Example',
		author: 'BSAC'
	});
	const chapter1 = new Chapter({
		name: 'The Beginning'
	});
	const sideA = new Side();
	const player = new Entity('player', {
		x: 20,
		y: 176
	});
	const spinner = new Entity('spinner', {
		x: 152,
		color: 'Blue',
		attachToSolid: false,
		y: 120
	});
	const room = new Room({
		name: 'intro',
		position: [ 0, 0 ],
		size: [ 320, 184 ],
		fgTiles: new Tiles(await fs.readFile(tileDataPath, 'utf8')),
		entities: [ player, spinner ]
	});

	// build the mod
	mod.chapters.push(chapter1);
	chapter1.sides.A = sideA;
	sideA.map.rooms.push(room);

	// package the mod
	await mod.package('output');

	console.log(mod);
})();
