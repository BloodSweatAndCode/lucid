// const cluster = require('cluster');
const extract = require('../lib/extract');

(async function() {
	try {
		console.log(await extract());
	} catch (err) {
		console.error(err.stack);
		process.exit(1);
	}
})();