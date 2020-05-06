const config = require('./config');
const log = require('./lib/log')('lucid');
const Map = require('./lib/Map');

(async function() {
	try {
		const map = await Map.load(config.testMapFile);
		// console.log(JSON.stringify(map, null, 2));
		map.save(config.testMapDstFile);
	} catch (err) {
		await log(err.stack);
		process.exit(1);
	}
})();