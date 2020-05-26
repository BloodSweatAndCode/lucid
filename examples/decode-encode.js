const { Side } = require('../lucid-dream');

// change this to where ever you wanna generate the new .bin file
const destFile = 'output/test.bin';

(async function() {
	try {
		// decode the test side
		const side = new Side();

		await side.decode('/Users/tony/Library/Application Support/Steam/steamapps/common/Celeste/Celeste.app/Contents/MacOS/Content/Maps/1-ForsakenCity.bin');
		console.log(side.map.rooms.map(r => r.entities));
		// await side.decode('./test/fixtures/test.bin');
		// await side.decode('C:\\Program Files (x86)\\Steam\\steamapps\\common\\Celeste\\Content\\Maps\\1-ForsakenCity.bin');

		// encode the new side
		await side.encode(destFile);
		console.log(`side file written to ${destFile}`);

	} catch (err) {
		console.error(err.stack);
		process.exit(1);
	}
})();