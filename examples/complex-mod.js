const fs = require('fs').promises;
const path = require('path');
const { Chapter, Entity, Mod, Room, Side, Tiles, Trigger } = require('../lucid-dream');

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

	const spinner = Entity.createSpinner({ x: 152, y: 120 });
	const bumper = Entity.createBigSpinner({ x: 100, y: 100 });
	const altMusic = Trigger.createMusicTrigger({
		x: 100,
		y: 0,
		width: 200,
		height: 200,
		track: 'music_farewell_final_run',
		resetOnLeave: true
	});

	const room = new Room({
		name: 'intro',
		position: [ 0, 0 ],
		size: [ 320, 184 ],
		fgTiles: new Tiles(await fs.readFile(tileDataPath, 'utf8')),
		entities: [ player, spinner, bumper ],
		triggers: [ altMusic ]
	});

	// build the mod
	mod.chapters.push(chapter1);
	chapter1.sides.A = sideA;
	sideA.map.rooms.push(room);

	// package the mod
	await mod.package('output');

	console.log(mod);
})();
