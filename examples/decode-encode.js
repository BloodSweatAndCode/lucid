const { Entity, Side } = require('../lucid-dream');

// change this to where ever you wanna generate the new .bin file
const destFile = 'test.bin';

(async function() {
	try {
		// decode the test side
		const side = new Side();

		await side.decode('./test/fixtures/test.bin');
		// await side.decode('C:\\Program Files (x86)\\Steam\\steamapps\\common\\Celeste\\Content\\Maps\\1-ForsakenCity.bin');

		// add a spinner to the first room
		side.map.rooms[0].entities.push(new Entity('spinner', {
			x: 152,
			color: 'Blue',
			attachToSolid: false,
			y: 120
		}));

		// encode the new side
		await side.encode(destFile);
		console.log(`side file written to ${destFile}`);

	} catch (err) {
		console.error(err.stack);
		process.exit(1);
	}
})();