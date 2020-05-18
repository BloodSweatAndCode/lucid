const fs = require('fs').promises;
const path = require('path');
const { Chapter, Decal, Entity, Mod, Room, Side, Tiles, Trigger } = require('../lucid-dream');

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
	const bumpers = [];
	for (let i = 0; i < 8; i++) {
		bumpers.push(new Entity.BigSpinner({ x: Math.random() * 300 + 10, y: (Math.random() * 164) + 10 }));
	}

	// crystal path
	const spinners = [];
	for (let i = 0; i < 10; i++) {
		spinners.push(new Entity.Spinner({
			x: 50 + (i * 12),
			y: 180 - (i * 12),
			color: 'Rainbow'
		}));

		spinners.push(new Entity.Spinner({
			x: 90 + (i * 12),
			y: 180 - (i * 12),
			color: 'Rainbow'
		}));
	}

	// decals
	const decal = new Decal('1-forsakencity\\broken_plane.png', 250, 136, 1.5, 1.5);

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
	const room = new Room([ 0, 0 ], {
		name: 'intro',
		fgTiles: new Tiles(await fs.readFile(tileDataPath, 'utf8')),
		entities: [ player, ...bumpers, ...spinners ],
		triggers: [ altMusic ],
		bgDecals: [ decal ]
	});

	// assemble the mod
	mod.chapters.push(chapter1);
	chapter1.sides.A = sideA;
	sideA.map.rooms.push(room);

	// package the mod
	await mod.package('output');

	console.log(mod);
})();
