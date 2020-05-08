const config = require('./config');
const fs = require('fs').promises;
const { Side } = require('./lib/class');

(async function() {
	try {
		const side = new Side();
		await side.load(config.testMapFile);

		await fs.writeFile('output/test.json', JSON.stringify(side, null, 2));

		// console.log(side);
		// const map = await Map.load(config.testMapFile);
		// console.log(JSON.stringify(map, null, 2));
		// map.save(config.testMapDstFile);
	} catch (err) {
		console.error(err.stack);
		process.exit(1);
	}
})();