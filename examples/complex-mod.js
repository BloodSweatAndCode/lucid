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

	// entities
	const player = new Entity.Player({ x: 20, y: 176 });
	const spinner = new Entity.Spinner({ x: 152, y: 120 });
	const bumper1 = new Entity.BigSpinner({ x: 100, y: 100 });
	const bumper2 = new Entity.BigSpinner({ x: 150, y: 100 });
	const bumper3 = new Entity.BigSpinner({ x: 200, y: 100 });

	// triggers
	const altMusic = new Trigger.MusicTrigger({
		x: 100,
		y: 0,
		width: 200,
		height: 200,
		track: 'music_farewell_final_run',
		resetOnLeave: true
	});

	// room creation
	const room = new Room({
		name: 'intro',
		position: [ 0, 0 ],
		size: [ 320, 184 ],
		fgTiles: new Tiles(await fs.readFile(tileDataPath, 'utf8')),
		entities: [ player, spinner, bumper1, bumper2, bumper3 ],
		triggers: [ altMusic ]
	});

	// assemble the mod
	mod.chapters.push(chapter1);
	chapter1.sides.A = sideA;
	sideA.map.rooms.push(room);

	// package the mod
	await mod.package('output');

	console.log(mod);
})();
