// This example generates a playable .bin file of a simple 1 room map.
// It contains a player spawn, dirt border, and a single spinner.

const { Entity, Room, Side, Tiles } = require('../lucid');

// change this to where ever you wanna generate the new .bin file
const destFile = 'output/test.bin';

(async function() {
	try {
		const side = new Side();
		const width = 40;
		const height = 23;
		const fgTiles = new Tiles(
			'1'.repeat(width) + '\n' +
			('1' + '0'.repeat(width - 2) + '1\n' ).repeat(height - 2) +
			'1'.repeat(width) + '\n'
		);
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
			size: [ width * 8, height * 8 ],
			fgTiles,
			entities: [ player, spinner ]
		});

		side.map.rooms.push(room);

		await side.encode(destFile);
		console.log(`side file written to ${destFile}`);
	} catch (err) {
		console.error(err.stack);
		process.exit(1);
	}
})();