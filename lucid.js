const config = require('./config');
const fs = require('fs').promises;
const log = require('./lib/log')('lucid');
const Side = require('./lib/Side');

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
		await log(err.stack);
		process.exit(1);
	}
})();